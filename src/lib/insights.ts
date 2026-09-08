import { ACTIVE_PIPELINE_STATUSES } from "./constants";
import { daysAgo, daysUntil } from "./utils";
import { haversineKm } from "./geo";
import type { AccountRecord, Insight, PipelineStatusId } from "./types";

const PIPE: PipelineStatusId[] = ACTIVE_PIPELINE_STATUSES;

function isPipe(s: PipelineStatusId): boolean {
  return PIPE.includes(s);
}

export function computeInsights(rows: AccountRecord[]): Insight[] {
  const existing = rows.filter((r) => r.status === "existing_client");
  const won = rows.filter((r) => r.status === "won");
  const lost = rows.filter((r) => r.status === "lost");
  const pipeline = rows.filter((r) => isPipe(r.status));
  const insights: Insight[] = [];

  for (const p of pipeline) {
    if (p.estimatedRevenue < 5e7) continue;
    const near = existing.find((e) => haversineKm(p, e) <= 10);
    if (!near) continue;
    insights.push({
      id: `near_ex_${p.id}`,
      kind: "near_existing",
      title: `High-value prospect beside a live client`,
      detail: `${p.clientName} — ${p.siteName} is ${haversineKm(p, near).toFixed(1)} km from ${near.clientName} (${near.siteName}). Reference the live operation in the pursuit.`,
      accountIds: [p.id, near.id],
      severity: "high",
    });
  }

  const cityBuckets = new Map<string, AccountRecord[]>();
  for (const r of pipeline) {
    const list = cityBuckets.get(r.city) ?? [];
    list.push(r);
    cityBuckets.set(r.city, list);
  }
  for (const [city, list] of cityBuckets) {
    if (list.length < 3) continue;
    const rev = list.reduce((s, r) => s + r.estimatedRevenue, 0);
    insights.push({
      id: `city_${city}`,
      kind: "city_concentration",
      title: `${city} has a dense pipeline`,
      detail: `${list.length} active pursuits in ${city} totalling ₹${(rev / 1e7).toFixed(1)} Cr. Worth a city war-room.`,
      accountIds: list.map((r) => r.id),
      severity: list.length >= 4 ? "high" : "medium",
    });
  }

  const nearCpu = pipeline.filter(
    (r) => r.distanceKm != null && r.distanceKm <= 12 && r.kitchenId,
  );
  if (nearCpu.length > 0) {
    insights.push({
      id: "near_cpu",
      kind: "near_cpu",
      title: `${nearCpu.length} pursuits sit close to a CPU`,
      detail: "These sites are within 12 km of an assigned central kitchen — operationally easier to mobilise and cheaper to serve.",
      accountIds: nearCpu.map((r) => r.id),
      severity: "medium",
    });
  }

  const highPax = pipeline.filter((r) => r.estimatedPax >= 2500);
  if (highPax.length > 0) {
    insights.push({
      id: "high_pax",
      kind: "high_pax",
      title: `${highPax.length} high-pax opportunities`,
      detail: "Accounts with 2,500+ estimated pax. These change kitchen design, staffing and CPU load — treat as strategic.",
      accountIds: highPax.map((r) => r.id),
      severity: "high",
    });
  }

  const stale = pipeline.filter((r) => {
    const d = daysAgo(r.lastActivityDate);
    return d != null && d >= 45;
  });
  if (stale.length > 0) {
    insights.push({
      id: "stale",
      kind: "stale",
      title: `${stale.length} pipeline accounts have gone quiet`,
      detail: "No recorded activity in 45+ days. Risk of slippage or silent loss — assign a next action this week.",
      accountIds: stale.map((r) => r.id),
      severity: "high",
    });
  }

  const closing = pipeline.filter((r) => {
    const d = daysUntil(r.expectedClosureDate);
    return d != null && d >= 0 && d <= 21;
  });
  if (closing.length > 0) {
    insights.push({
      id: "closing",
      kind: "closing_soon",
      title: `${closing.length} opportunities close within 21 days`,
      detail: "Expected closure is imminent. Confirm owner coverage, commercials and mobilisation readiness.",
      accountIds: closing.map((r) => r.id),
      severity: "high",
    });
  }

  const liveOrWon = [...existing, ...won];
  for (const l of lost) {
    const near = liveOrWon.find((w) => haversineKm(l, w) <= 8);
    if (!near) continue;
    insights.push({
      id: `lost_${l.id}`,
      kind: "lost_near_won",
      title: `Lost account next to a winning site`,
      detail: `${l.clientName} — ${l.siteName} sits ${haversineKm(l, near).toFixed(1)} km from ${near.clientName}. Use the live site as a re-entry proof point.`,
      accountIds: [l.id, near.id],
      severity: "medium",
    });
  }

  for (const e of existing) {
    const nearby = pipeline.filter((p) => haversineKm(e, p) <= 10);
    if (nearby.length < 2) continue;
    insights.push({
      id: `ex_pros_${e.id}`,
      kind: "existing_with_prospects",
      title: `${e.clientName} is a cluster hub`,
      detail: `${nearby.length} active prospects sit within 10 km of ${e.siteName}. Cross-sell the live operation and share CPU capacity.`,
      accountIds: [e.id, ...nearby.map((p) => p.id)],
      severity: "medium",
    });
  }

  const used = new Set<string>();
  for (const a of pipeline) {
    if (used.has(a.id)) continue;
    const cluster = pipeline.filter(
      (b) => b.id === a.id || haversineKm(a, b) <= 5,
    );
    if (cluster.length < 3) continue;
    for (const c of cluster) used.add(c.id);
    insights.push({
      id: `geo_${a.id}`,
      kind: "cluster_geo",
      title: `Geographic cluster of ${cluster.length} prospects`,
      detail: `Around ${a.city}: ${cluster.map((c) => c.clientName).join(", ")}. One kitchen plan could serve several of these.`,
      accountIds: cluster.map((c) => c.id),
      severity: "medium",
    });
  }

  const rank: Record<Insight["severity"], number> = { high: 0, medium: 1, info: 2 };
  return insights.sort((a, b) => rank[a.severity] - rank[b.severity]).slice(0, 10);
}

export function computeKpis(rows: AccountRecord[]) {
  const pipelineStatuses = new Set<PipelineStatusId>([
    ...PIPE,
    "universe",
  ]);
  return {
    total: rows.length,
    existing: rows.filter((r) => r.status === "existing_client").length,
    pipeline: rows.filter((r) => pipelineStatuses.has(r.status)).length,
    fy26: rows.filter((r) => r.pipelineFy === "FY26" || r.status === "pipeline_fy26").length,
    fy27: rows.filter((r) => r.pipelineFy === "FY27" || r.status === "pipeline_fy27").length,
    fy28: rows.filter((r) => r.pipelineFy === "FY28" || r.status === "pipeline_fy28").length,
    proposalDev: rows.filter((r) => r.status === "proposal_development").length,
    proposalSub: rows.filter((r) => r.status === "proposal_submitted").length,
    won: rows.filter((r) => r.status === "won").length,
    lost: rows.filter((r) => r.status === "lost").length,
    totalPax: rows.reduce((s, r) => s + (r.estimatedPax || r.paxBeingServed || 0), 0),
    pipelineRevenue: rows
      .filter((r) => isPipe(r.status))
      .reduce((s, r) => s + (r.estimatedRevenue || 0), 0),
  };
}

export function applyFilters(
  rows: AccountRecord[],
  filters: import("./types").Filters,
  search: string,
): AccountRecord[] {
  const q = search.trim().toLowerCase();
  return rows.filter((r) => {
    if (filters.statuses.length && !filters.statuses.includes(r.status)) return false;
    if (filters.fys.length && !filters.fys.includes(r.pipelineFy)) return false;
    if (filters.accountTypes.length && !filters.accountTypes.includes(r.accountType)) return false;
    if (filters.industries.length && !filters.industries.includes(r.industry)) return false;
    if (filters.cities.length && !filters.cities.includes(r.city)) return false;
    if (filters.states.length && !filters.states.includes(r.state)) return false;
    if (filters.owners.length && !filters.owners.includes(r.owner)) return false;
    if (filters.mapTypes.length && !filters.mapTypes.includes(r.mapType)) return false;
    if (filters.kitchens.length) {
      const kid = r.kitchenId || "__none__";
      if (!filters.kitchens.includes(kid)) return false;
    }
    if (filters.businessTypes.length && !filters.businessTypes.includes(r.businessType)) return false;
    if (filters.proposalStages.length && !filters.proposalStages.includes(r.proposalStage)) return false;
    if (filters.paxMin != null && r.estimatedPax < filters.paxMin) return false;
    if (filters.paxMax != null && r.estimatedPax > filters.paxMax) return false;
    if (filters.revenueMin != null && r.estimatedRevenue < filters.revenueMin) return false;
    if (filters.revenueMax != null && r.estimatedRevenue > filters.revenueMax) return false;
    if (filters.distanceMax != null) {
      if (r.distanceKm == null || r.distanceKm > filters.distanceMax) return false;
    }
    if (q) {
      const blob = [
        r.clientName,
        r.siteName,
        r.city,
        r.state,
        r.owner,
        r.industry,
        r.businessType,
        r.servicesRequired,
        r.notes,
      ]
        .join(" ")
        .toLowerCase();
      if (!blob.includes(q)) return false;
    }
    return true;
  });
}
