import * as XLSX from "xlsx";
import { FIELD_ALIASES, STATUS_LIST } from "./constants";
import type {
  AccountRecord,
  AccountType,
  BusinessType,
  ColumnMapping,
  MappedRow,
  MapType,
  PipelineFy,
  PipelineStatusId,
} from "./types";
import { ACCOUNT_TYPES, BUSINESS_TYPES, MAP_TYPES, PIPELINE_FYS, PIPELINE_STATUS_IDS } from "./types";
import { accountMatchKey, uid } from "./utils";
import { applyKitchen } from "./geo";
import type { CentralKitchen } from "./types";

export const IMPORTABLE_FIELDS: { field: keyof AccountRecord; label: string }[] = [
  { field: "clientName", label: "Client / Account Name" },
  { field: "siteName", label: "Site Name" },
  { field: "accountType", label: "Account Type" },
  { field: "industry", label: "Industry / Segment" },
  { field: "city", label: "City" },
  { field: "state", label: "State" },
  { field: "address", label: "Full Address" },
  { field: "lat", label: "Latitude" },
  { field: "lng", label: "Longitude" },
  { field: "status", label: "Pipeline Status" },
  { field: "pipelineFy", label: "Pipeline FY" },
  { field: "probability", label: "Probability %" },
  { field: "expectedClosureDate", label: "Expected Closure Date" },
  { field: "owner", label: "Opportunity Owner" },
  { field: "proposalStage", label: "Proposal Stage" },
  { field: "estimatedRevenue", label: "Estimated Revenue" },
  { field: "estimatedPax", label: "Estimated Pax" },
  { field: "lastActivity", label: "Last Activity" },
  { field: "lastActivityDate", label: "Last Activity Date" },
  { field: "nextAction", label: "Next Action" },
  { field: "nextActionDate", label: "Next Action Date" },
  { field: "businessType", label: "Business Type" },
  { field: "mapType", label: "Map Type" },
  { field: "paxBeingServed", label: "Pax Being Served" },
  { field: "servicesRequired", label: "Services Required" },
  { field: "kitchenId", label: "Central Kitchen / CPU" },
  { field: "notes", label: "Notes" },
];

export function guessMapping(headers: string[]): ColumnMapping[] {
  return headers.map((source) => {
    const key = source.trim().toLowerCase().replace(/\s+/g, " ");
    const field = FIELD_ALIASES[key] ?? "";
    return { source, field };
  });
}

export async function parseWorkbook(file: File): Promise<{ headers: string[]; rows: Record<string, unknown>[] }> {
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(buf, { type: "array", cellDates: true });
  const sheet = wb.Sheets[wb.SheetNames[0] ?? ""];
  if (!sheet) return { headers: [], rows: [] };
  const json = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: "", raw: true });
  const headers = json.length > 0 ? Object.keys(json[0] ?? {}) : [];
  return { headers, rows: json };
}

export function mapRows(
  rawRows: Record<string, unknown>[],
  mapping: ColumnMapping[],
  existing: AccountRecord[],
  kitchens: CentralKitchen[],
): MappedRow[] {
  const mapBySource = new Map(mapping.map((m) => [m.source, m.field]));
  const byKey = new Map(existing.map((r) => [accountMatchKey(r.clientName, r.siteName, r.city), r.id]));

  return rawRows.map((raw, i) => {
    const data: Partial<AccountRecord> = {};
    for (const [source, value] of Object.entries(raw)) {
      const field = mapBySource.get(source);
      if (!field) continue;
      assignField(data, field, value, kitchens);
    }
    const errors: string[] = [];
    const warnings: string[] = [];
    if (!data.clientName) errors.push("Client name is required");
    if (!data.siteName) errors.push("Site name is required");
    if (!data.status) errors.push("Pipeline status is required");
    if (data.lat != null && data.lng != null) {
      if (!Number.isFinite(data.lat) || !Number.isFinite(data.lng)) {
        errors.push("Latitude / longitude must be numbers");
      }
    } else {
      warnings.push("Missing coordinates — map pin will be unavailable until added");
    }
    const key =
      data.clientName && data.siteName
        ? accountMatchKey(data.clientName, data.siteName, data.city ?? "")
        : "";
    const matchId = key ? (byKey.get(key) ?? null) : null;
    if (matchId) warnings.push("Matches an existing site — choose Update, Skip, or Create New");
    return {
      rowNumber: i + 2,
      raw,
      data,
      errors,
      warnings,
      matchId,
      decision: matchId ? "update" : "create",
    };
  });
}

function assignField(
  data: Partial<AccountRecord>,
  field: keyof AccountRecord,
  value: unknown,
  kitchens: CentralKitchen[],
) {
  if (value == null || value === "") return;
  switch (field) {
    case "lat":
    case "lng":
    case "probability":
    case "estimatedPax":
    case "paxBeingServed":
      data[field] = Number(value) as never;
      break;
    case "estimatedRevenue":
      data.estimatedRevenue = parseRevenue(value);
      break;
    case "status":
      data.status = parseStatus(value);
      break;
    case "pipelineFy":
      data.pipelineFy = parseFy(value);
      break;
    case "businessType":
      data.businessType = parseEnum(value, BUSINESS_TYPES, "B&I");
      break;
    case "mapType":
      data.mapType = parseEnum(value, MAP_TYPES, "Mix");
      break;
    case "accountType":
      data.accountType = parseEnum(value, ACCOUNT_TYPES, "New Logo");
      break;
    case "expectedClosureDate":
    case "lastActivityDate":
    case "nextActionDate":
      data[field] = parseDate(value);
      break;
    case "kitchenId": {
      const name = String(value).trim().toLowerCase();
      const hit = kitchens.find(
        (k) => k.id === String(value) || k.name.toLowerCase() === name,
      );
      data.kitchenId = hit?.id ?? "";
      break;
    }
    default:
      (data as Record<string, unknown>)[field] = String(value).trim();
  }
}

function parseRevenue(value: unknown): number {
  if (typeof value === "number" && Number.isFinite(value)) {
    if (value > 0 && value < 200) return Math.round(value * 1e7);
    return Math.round(value);
  }
  const s = String(value).replace(/[₹,\s]/g, "").toLowerCase();
  if (!s) return 0;
  if (s.endsWith("cr") || s.endsWith("crore")) {
    return Math.round(parseFloat(s) * 1e7);
  }
  if (s.endsWith("l") || s.endsWith("lakh") || s.endsWith("lac")) {
    return Math.round(parseFloat(s) * 1e5);
  }
  return Math.round(parseFloat(s) || 0);
}

function parseStatus(value: unknown): PipelineStatusId {
  const s = String(value).trim().toLowerCase().replace(/[_-]+/g, " ");
  const hit = STATUS_LIST.find(
    (m) => m.label.toLowerCase() === s || m.id.replace(/_/g, " ") === s || m.short.toLowerCase() === s,
  );
  if (hit) return hit.id;
  if (PIPELINE_STATUS_IDS.includes(s as PipelineStatusId)) return s as PipelineStatusId;
  return "universe";
}

function parseFy(value: unknown): PipelineFy {
  const s = String(value).trim().toUpperCase();
  if ((PIPELINE_FYS as readonly string[]).includes(s)) return s as PipelineFy;
  return "";
}

function parseEnum<T extends string>(value: unknown, allowed: readonly T[], fallback: T): T {
  const s = String(value).trim();
  const hit = allowed.find((a) => a.toLowerCase() === s.toLowerCase());
  return hit ?? fallback;
}

function parseDate(value: unknown): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === "number") {
    const utc = new Date(Date.UTC(1899, 11, 30) + value * 86400000);
    return utc.toISOString().slice(0, 10);
  }
  const s = String(value).trim();
  if (!s) return "";
  const d = new Date(s);
  if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);
  return s;
}

export function commitImport(
  rows: MappedRow[],
  existing: AccountRecord[],
  kitchens: CentralKitchen[],
): { next: AccountRecord[]; summary: { created: number; updated: number; skipped: number; errors: number } } {
  const next = [...existing];
  let created = 0;
  let updated = 0;
  let skipped = 0;
  let errors = 0;
  const now = new Date().toISOString();

  for (const row of rows) {
    if (row.errors.length) {
      errors += 1;
      continue;
    }
    if (row.decision === "skip") {
      skipped += 1;
      continue;
    }
    const base = blankRecord(now);
    const merged = applyKitchen({ ...base, ...row.data, updatedAt: now } as AccountRecord, kitchens);
    if (row.decision === "update" && row.matchId) {
      const idx = next.findIndex((r) => r.id === row.matchId);
      if (idx >= 0) {
        const prev = next[idx]!;
        next[idx] = applyKitchen(
          {
            ...prev,
            ...row.data,
            id: prev.id,
            accountId: prev.accountId,
            siteId: prev.siteId,
            opportunityId: prev.opportunityId,
            createdAt: prev.createdAt,
            updatedAt: now,
          } as AccountRecord,
          kitchens,
        );
        updated += 1;
        continue;
      }
    }
    next.push(merged);
    created += 1;
  }
  return { next, summary: { created, updated, skipped, errors } };
}

function blankRecord(now: string): AccountRecord {
  return {
    id: uid("sit"),
    accountId: uid("acc"),
    clientName: "",
    accountType: "New Logo",
    industry: "",
    siteId: uid("ste"),
    siteName: "",
    city: "",
    state: "",
    address: "",
    lat: 0,
    lng: 0,
    opportunityId: uid("opp"),
    status: "universe",
    pipelineFy: "",
    probability: 0,
    expectedClosureDate: "",
    owner: "",
    proposalStage: "",
    estimatedRevenue: 0,
    estimatedPax: 0,
    businessType: "B&I",
    mapType: "Mix",
    paxBeingServed: 0,
    servicesRequired: "",
    kitchenId: "",
    distanceKm: null,
    roadDistanceKm: null,
    travelMinutes: null,
    lastActivity: "",
    lastActivityDate: "",
    nextAction: "",
    nextActionDate: "",
    notes: "",
    createdAt: now,
    updatedAt: now,
  };
}

export function exportWorkbook(rows: AccountRecord[], kitchens: CentralKitchen[]): Blob {
  const kitchenName = (id: string) => kitchens.find((k) => k.id === id)?.name ?? "";
  const data = rows.map((r) => ({
    "Client / Account Name": r.clientName,
    "Site Name": r.siteName,
    "Account Type": r.accountType,
    "Industry / Segment": r.industry,
    City: r.city,
    State: r.state,
    "Full Address": r.address,
    Latitude: r.lat,
    Longitude: r.lng,
    "Pipeline Status": STATUS_LIST.find((s) => s.id === r.status)?.label ?? r.status,
    "Pipeline FY": r.pipelineFy,
    "Probability %": r.probability,
    "Expected Closure Date": r.expectedClosureDate,
    "Opportunity Owner": r.owner,
    "Proposal Stage": r.proposalStage,
    "Estimated Revenue": r.estimatedRevenue,
    "Estimated Pax": r.estimatedPax,
    "Last Activity": r.lastActivity,
    "Last Activity Date": r.lastActivityDate,
    "Next Action": r.nextAction,
    "Next Action Date": r.nextActionDate,
    "Business Type": r.businessType,
    "Map Type": r.mapType,
    "Pax Being Served": r.paxBeingServed,
    "Services Required": r.servicesRequired,
    "Central Kitchen / CPU": kitchenName(r.kitchenId),
    "Distance from Central Kitchen": r.distanceKm ?? "",
    "Travel Time from Central Kitchen": r.travelMinutes ?? "",
    Notes: r.notes,
  }));
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Pipeline");
  const out = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  return new Blob([out], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export { blankRecord };
