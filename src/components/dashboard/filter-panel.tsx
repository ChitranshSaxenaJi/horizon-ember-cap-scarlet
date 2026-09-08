import { STATUS_LIST } from "@/lib/constants";
import { useDashboard } from "@/lib/store";
import type { AccountRecord, Filters } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NativeSelect } from "@/components/ui/native-select";
import { StatusDot } from "./status-badge";
import { X } from "lucide-react";

function unique(rows: AccountRecord[], key: keyof AccountRecord): string[] {
  return Array.from(new Set(rows.map((r) => String(r[key] ?? "")).filter(Boolean))).sort();
}

function Multi({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: string; label: string; swatch?: string }[];
  value: string[];
  onChange: (next: string[]) => void;
}) {
  return (
    <fieldset className="space-y-1.5">
      <legend className="text-xs font-medium text-muted-foreground">{label}</legend>
      <div className="max-h-40 space-y-1 overflow-auto atlas-scroll pr-1">
        {options.map((o) => {
          const checked = value.includes(o.id);
          return (
            <label key={o.id} className="flex min-h-8 cursor-pointer items-center gap-2 text-sm">
              <Checkbox
                checked={checked}
                onCheckedChange={() =>
                  onChange(checked ? value.filter((v) => v !== o.id) : [...value, o.id])
                }
              />
              {o.swatch ? <span className="size-2.5 rounded-full" style={{ background: o.swatch }} /> : null}
              <span className="truncate">{o.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function FilterPanel({ all }: { all: AccountRecord[] }) {
  const { filters, setFilters, resetFilters, kitchens } = useDashboard();
  const activeCount = countActive(filters);

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-1 pb-3">
        <p className="text-sm font-medium">Filters</p>
        {activeCount > 0 ? (
          <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 px-2 text-xs">
            <X className="size-3.5" />
            Clear {activeCount}
          </Button>
        ) : null}
      </div>
      <div className="atlas-scroll flex-1 space-y-4 overflow-y-auto pr-1 pb-6">
        <Multi
          label="Pipeline status"
          options={STATUS_LIST.map((s) => ({ id: s.id, label: s.label, swatch: s.hex }))}
          value={filters.statuses}
          onChange={(statuses) => setFilters({ statuses: statuses as Filters["statuses"] })}
        />
        <Multi
          label="Pipeline FY"
          options={["FY26", "FY27", "FY28"].map((id) => ({ id, label: id }))}
          value={filters.fys}
          onChange={(fys) => setFilters({ fys })}
        />
        <Multi
          label="Account type"
          options={unique(all, "accountType").map((id) => ({ id, label: id }))}
          value={filters.accountTypes}
          onChange={(accountTypes) => setFilters({ accountTypes })}
        />
        <Multi
          label="Industry"
          options={unique(all, "industry").map((id) => ({ id, label: id }))}
          value={filters.industries}
          onChange={(industries) => setFilters({ industries })}
        />
        <Multi
          label="Business type"
          options={unique(all, "businessType").map((id) => ({ id, label: id }))}
          value={filters.businessTypes}
          onChange={(businessTypes) => setFilters({ businessTypes })}
        />
        <Multi
          label="City"
          options={unique(all, "city").map((id) => ({ id, label: id }))}
          value={filters.cities}
          onChange={(cities) => setFilters({ cities })}
        />
        <Multi
          label="State"
          options={unique(all, "state").map((id) => ({ id, label: id }))}
          value={filters.states}
          onChange={(states) => setFilters({ states })}
        />
        <Multi
          label="Opportunity owner"
          options={unique(all, "owner").map((id) => ({ id, label: id }))}
          value={filters.owners}
          onChange={(owners) => setFilters({ owners })}
        />
        <Multi
          label="Map type"
          options={["Map 1", "Map 2", "Mix"].map((id) => ({ id, label: id }))}
          value={filters.mapTypes}
          onChange={(mapTypes) => setFilters({ mapTypes })}
        />
        <Multi
          label="Central kitchen"
          options={[
            { id: "__none__", label: "Unassigned" },
            ...kitchens.map((k) => ({ id: k.id, label: k.name })),
          ]}
          value={filters.kitchens}
          onChange={(kitchens) => setFilters({ kitchens })}
        />
        <Multi
          label="Proposal stage"
          options={unique(all, "proposalStage").map((id) => ({ id, label: id }))}
          value={filters.proposalStages}
          onChange={(proposalStages) => setFilters({ proposalStages })}
        />
        <div className="space-y-2">
          <Label>Pax range</Label>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Min"
              value={filters.paxMin ?? ""}
              onChange={(e) =>
                setFilters({ paxMin: e.target.value === "" ? null : Number(e.target.value) })
              }
            />
            <Input
              type="number"
              placeholder="Max"
              value={filters.paxMax ?? ""}
              onChange={(e) =>
                setFilters({ paxMax: e.target.value === "" ? null : Number(e.target.value) })
              }
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Revenue (₹ Cr)</Label>
          <div className="flex gap-2">
            <Input
              type="number"
              step="0.1"
              placeholder="Min"
              value={filters.revenueMin != null ? filters.revenueMin / 1e7 : ""}
              onChange={(e) =>
                setFilters({
                  revenueMin: e.target.value === "" ? null : Number(e.target.value) * 1e7,
                })
              }
            />
            <Input
              type="number"
              step="0.1"
              placeholder="Max"
              value={filters.revenueMax != null ? filters.revenueMax / 1e7 : ""}
              onChange={(e) =>
                setFilters({
                  revenueMax: e.target.value === "" ? null : Number(e.target.value) * 1e7,
                })
              }
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Max distance from CPU (km)</Label>
          <NativeSelect
            value={filters.distanceMax ?? ""}
            onChange={(e) =>
              setFilters({
                distanceMax: e.target.value === "" ? null : Number(e.target.value),
              })
            }
          >
            <option value="">Any</option>
            <option value="5">5 km</option>
            <option value="10">10 km</option>
            <option value="25">25 km</option>
            <option value="50">50 km</option>
          </NativeSelect>
        </div>
      </div>
    </div>
  );
}

function countActive(f: Filters): number {
  let n = 0;
  for (const v of Object.values(f)) {
    if (Array.isArray(v) && v.length) n += 1;
    else if (v != null && !Array.isArray(v)) n += 1;
  }
  return n;
}

export function StatusLegend({
  selected,
  onToggle,
}: {
  selected: Filters["statuses"];
  onToggle: (id: Filters["statuses"][number]) => void;
}) {
  return (
    <div className="atlas-scroll flex gap-1 overflow-x-auto pb-1">
      {STATUS_LIST.map((s) => {
        const on = selected.length === 0 || selected.includes(s.id);
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => onToggle(s.id)}
            className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full bg-card px-2.5 text-xs shadow-[var(--shadow-border)]"
            style={{ opacity: on ? 1 : 0.4 }}
          >
            <StatusDot status={s.id} />
            {s.label}
          </button>
        );
      })}
    </div>
  );
}
