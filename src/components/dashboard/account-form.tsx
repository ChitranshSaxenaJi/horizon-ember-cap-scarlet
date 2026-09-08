import { useEffect, useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NativeSelect } from "@/components/ui/native-select";
import { STATUS_LIST, INDUSTRIES, OWNERS } from "@/lib/constants";
import { blankRecord } from "@/lib/excel";
import { useDashboard } from "@/lib/store";
import {
  ACCOUNT_TYPES,
  BUSINESS_TYPES,
  MAP_TYPES,
  PIPELINE_FYS,
  PROPOSAL_STAGES,
} from "@/lib/types";
import type { AccountRecord } from "@/lib/types";

export function AccountForm() {
  const formMode = useDashboard((s) => s.formMode);
  const setFormMode = useDashboard((s) => s.setFormMode);
  const accounts = useDashboard((s) => s.accounts);
  const selectedId = useDashboard((s) => s.selectedId);
  const kitchens = useDashboard((s) => s.kitchens);
  const upsertAccount = useDashboard((s) => s.upsertAccount);

  const editing = formMode === "edit" ? accounts.find((a) => a.id === selectedId) : null;
  const open = formMode !== "closed";
  const [draft, setDraft] = useState<AccountRecord>(blankRecord(new Date().toISOString()));

  useEffect(() => {
    if (formMode === "edit" && editing) setDraft(editing);
    if (formMode === "create") setDraft(blankRecord(new Date().toISOString()));
  }, [formMode, editing?.id]);

  function set<K extends keyof AccountRecord>(key: K, value: AccountRecord[K]) {
    setDraft((d) => ({ ...d, [key]: value }));
  }

  function save() {
    if (!draft.clientName.trim() || !draft.siteName.trim()) return;
    upsertAccount({
      ...draft,
      lat: Number(draft.lat) || 0,
      lng: Number(draft.lng) || 0,
      probability: Number(draft.probability) || 0,
      estimatedRevenue: Number(draft.estimatedRevenue) || 0,
      estimatedPax: Number(draft.estimatedPax) || 0,
      paxBeingServed: Number(draft.paxBeingServed) || 0,
    });
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && setFormMode("closed")}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{formMode === "edit" ? "Edit account" : "Add account"}</DialogTitle>
          <DialogDescription>
            Site-level record. Distances to the assigned CPU are calculated automatically.
          </DialogDescription>
        </DialogHeader>
        <div className="atlas-scroll max-h-[min(70dvh,640px)] space-y-5 overflow-y-auto px-5 py-4">
          <fieldset className="grid gap-3 md:grid-cols-2">
            <legend className="col-span-full mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Account
            </legend>
            <Field label="Client / account name">
              <Input value={draft.clientName} onChange={(e) => set("clientName", e.target.value)} />
            </Field>
            <Field label="Site name">
              <Input value={draft.siteName} onChange={(e) => set("siteName", e.target.value)} />
            </Field>
            <Field label="Account type">
              <NativeSelect
                value={draft.accountType}
                onChange={(e) => set("accountType", e.target.value as AccountRecord["accountType"])}
              >
                {ACCOUNT_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </NativeSelect>
            </Field>
            <Field label="Industry">
              <NativeSelect value={draft.industry} onChange={(e) => set("industry", e.target.value)}>
                <option value="">Select</option>
                {INDUSTRIES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </NativeSelect>
            </Field>
            <Field label="City">
              <Input value={draft.city} onChange={(e) => set("city", e.target.value)} />
            </Field>
            <Field label="State">
              <Input value={draft.state} onChange={(e) => set("state", e.target.value)} />
            </Field>
            <Field label="Address" className="md:col-span-2">
              <Input value={draft.address} onChange={(e) => set("address", e.target.value)} />
            </Field>
            <Field label="Latitude">
              <Input
                type="number"
                step="0.0001"
                value={draft.lat || ""}
                onChange={(e) => set("lat", Number(e.target.value))}
              />
            </Field>
            <Field label="Longitude">
              <Input
                type="number"
                step="0.0001"
                value={draft.lng || ""}
                onChange={(e) => set("lng", Number(e.target.value))}
              />
            </Field>
          </fieldset>

          <fieldset className="grid gap-3 md:grid-cols-2">
            <legend className="col-span-full mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Pipeline
            </legend>
            <Field label="Status">
              <NativeSelect
                value={draft.status}
                onChange={(e) => set("status", e.target.value as AccountRecord["status"])}
              >
                {STATUS_LIST.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </NativeSelect>
            </Field>
            <Field label="Pipeline FY">
              <NativeSelect
                value={draft.pipelineFy}
                onChange={(e) => set("pipelineFy", e.target.value as AccountRecord["pipelineFy"])}
              >
                <option value="">—</option>
                {PIPELINE_FYS.map((f) => (
                  <option key={f}>{f}</option>
                ))}
              </NativeSelect>
            </Field>
            <Field label="Probability %">
              <Input
                type="number"
                min={0}
                max={100}
                value={draft.probability || ""}
                onChange={(e) => set("probability", Number(e.target.value))}
              />
            </Field>
            <Field label="Expected closure">
              <Input
                type="date"
                value={draft.expectedClosureDate}
                onChange={(e) => set("expectedClosureDate", e.target.value)}
              />
            </Field>
            <Field label="Owner">
              <NativeSelect value={draft.owner} onChange={(e) => set("owner", e.target.value)}>
                <option value="">Select</option>
                {OWNERS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
                {draft.owner && !OWNERS.includes(draft.owner) ? (
                  <option>{draft.owner}</option>
                ) : null}
              </NativeSelect>
            </Field>
            <Field label="Proposal stage">
              <NativeSelect
                value={draft.proposalStage}
                onChange={(e) => set("proposalStage", e.target.value)}
              >
                {PROPOSAL_STAGES.map((s) => (
                  <option key={s || "blank"} value={s}>
                    {s || "—"}
                  </option>
                ))}
              </NativeSelect>
            </Field>
            <Field label="Est. revenue (₹ Cr)">
              <Input
                type="number"
                step="0.1"
                value={draft.estimatedRevenue ? draft.estimatedRevenue / 1e7 : ""}
                onChange={(e) => set("estimatedRevenue", Number(e.target.value) * 1e7)}
              />
            </Field>
            <Field label="Est. pax">
              <Input
                type="number"
                value={draft.estimatedPax || ""}
                onChange={(e) => set("estimatedPax", Number(e.target.value))}
              />
            </Field>
          </fieldset>

          <fieldset className="grid gap-3 md:grid-cols-2">
            <legend className="col-span-full mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Operations
            </legend>
            <Field label="Business type">
              <NativeSelect
                value={draft.businessType}
                onChange={(e) => set("businessType", e.target.value as AccountRecord["businessType"])}
              >
                {BUSINESS_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </NativeSelect>
            </Field>
            <Field label="Map type">
              <NativeSelect
                value={draft.mapType}
                onChange={(e) => set("mapType", e.target.value as AccountRecord["mapType"])}
              >
                <option value="">—</option>
                {MAP_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </NativeSelect>
            </Field>
            <Field label="Pax being served">
              <Input
                type="number"
                value={draft.paxBeingServed || ""}
                onChange={(e) => set("paxBeingServed", Number(e.target.value))}
              />
            </Field>
            <Field label="Central kitchen">
              <NativeSelect
                value={draft.kitchenId}
                onChange={(e) => set("kitchenId", e.target.value)}
              >
                <option value="">Unassigned</option>
                {kitchens.map((k) => (
                  <option key={k.id} value={k.id}>
                    {k.name}
                  </option>
                ))}
              </NativeSelect>
            </Field>
            <Field label="Services" className="md:col-span-2">
              <Input
                value={draft.servicesRequired}
                onChange={(e) => set("servicesRequired", e.target.value)}
              />
            </Field>
          </fieldset>

          <fieldset className="grid gap-3 md:grid-cols-2">
            <legend className="col-span-full mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Activity
            </legend>
            <Field label="Last activity">
              <Input value={draft.lastActivity} onChange={(e) => set("lastActivity", e.target.value)} />
            </Field>
            <Field label="Last activity date">
              <Input
                type="date"
                value={draft.lastActivityDate}
                onChange={(e) => set("lastActivityDate", e.target.value)}
              />
            </Field>
            <Field label="Next action">
              <Input value={draft.nextAction} onChange={(e) => set("nextAction", e.target.value)} />
            </Field>
            <Field label="Next action date">
              <Input
                type="date"
                value={draft.nextActionDate}
                onChange={(e) => set("nextActionDate", e.target.value)}
              />
            </Field>
            <Field label="Notes" className="md:col-span-2">
              <Textarea value={draft.notes} onChange={(e) => set("notes", e.target.value)} />
            </Field>
          </fieldset>
        </div>
        <div className="flex justify-end gap-2 border-t px-5 py-3">
          <Button variant="ghost" onClick={() => setFormMode("closed")}>
            Cancel
          </Button>
          <Button onClick={save} disabled={!draft.clientName.trim() || !draft.siteName.trim()}>
            Save account
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`grid gap-1.5 ${className ?? ""}`}>
      <Label>{label}</Label>
      {children}
    </label>
  );
}
