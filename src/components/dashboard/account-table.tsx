import { useMemo, useState, type ReactNode } from "react";
import { STATUS_META } from "@/lib/constants";
import { useDashboard } from "@/lib/store";
import type { AccountRecord, GroupByField } from "@/lib/types";
import { formatDate, formatINR, formatKm, formatPax } from "@/lib/utils";
import { StatusBadge } from "./status-badge";
import { AccountHoverCard } from "./hover-card";
import { ArrowDown, ArrowUp } from "lucide-react";

type Col = {
  key: keyof AccountRecord;
  label: string;
  align?: "right";
  hideOnMobile?: boolean;
  render?: (r: AccountRecord) => ReactNode;
};

export function AccountTable({ rows }: { rows: AccountRecord[] }) {
  const kitchens = useDashboard((s) => s.kitchens);
  const selectedId = useDashboard((s) => s.selectedId);
  const hoveredId = useDashboard((s) => s.hoveredId);
  const setSelected = useDashboard((s) => s.setSelected);
  const setHovered = useDashboard((s) => s.setHovered);
  const groupBy = useDashboard((s) => s.groupBy);
  const [sortKey, setSortKey] = useState<keyof AccountRecord>("clientName");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number } | null>(null);

  const kitchenName = (id: string) => kitchens.find((k) => k.id === id)?.name ?? "—";

  const cols: Col[] = useMemo(
    () => [
      { key: "clientName", label: "Client" },
      { key: "siteName", label: "Site" },
      {
        key: "status",
        label: "Status",
        render: (r) => <StatusBadge status={r.status} />,
      },
      { key: "pipelineFy", label: "FY" },
      { key: "city", label: "City" },
      { key: "industry", label: "Industry", hideOnMobile: true },
      { key: "businessType", label: "Type", hideOnMobile: true },
      { key: "owner", label: "Owner", hideOnMobile: true },
      {
        key: "estimatedPax",
        label: "Pax",
        align: "right",
        render: (r) => <span className="tabular">{formatPax(r.estimatedPax)}</span>,
      },
      {
        key: "estimatedRevenue",
        label: "Revenue",
        align: "right",
        render: (r) => <span className="tabular">{formatINR(r.estimatedRevenue)}</span>,
      },
      {
        key: "kitchenId",
        label: "CPU",
        hideOnMobile: true,
        render: (r) => kitchenName(r.kitchenId),
      },
      {
        key: "distanceKm",
        label: "Dist.",
        align: "right",
        hideOnMobile: true,
        render: (r) => <span className="tabular">{formatKm(r.distanceKm)}</span>,
      },
      { key: "mapType", label: "Map", hideOnMobile: true },
      {
        key: "nextActionDate",
        label: "Next action",
        hideOnMobile: true,
        render: (r) => (
          <span className="text-muted-foreground">
            {r.nextAction ? `${r.nextAction} · ${formatDate(r.nextActionDate)}` : "—"}
          </span>
        ),
      },
    ],
    [kitchens],
  );

  const sorted = useMemo(() => {
    const copy = [...rows];
    copy.sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      const an = av == null ? "" : av;
      const bn = bv == null ? "" : bv;
      if (typeof an === "number" && typeof bn === "number") {
        return sortDir === "asc" ? an - bn : bn - an;
      }
      const cmp = String(an).localeCompare(String(bn), "en-IN");
      return sortDir === "asc" ? cmp : -cmp;
    });
    return copy;
  }, [rows, sortKey, sortDir]);

  const groups = useMemo(() => groupRows(sorted, groupBy, kitchenName), [sorted, groupBy, kitchens]);

  function onSort(key: keyof AccountRecord) {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  const hovered = rows.find((r) => r.id === hoveredId);

  return (
    <div className="relative h-full min-h-0">
      <div className="atlas-scroll h-full overflow-auto rounded-lg bg-card shadow-[var(--shadow-border)]">
        <table className="w-full min-w-[640px] border-separate border-spacing-0 text-sm md:min-w-[1100px]">
          <thead className="sticky top-0 z-10 bg-card">
            <tr>
              {cols.map((c) => (
                <th
                  key={c.key}
                  className={`border-b bg-card px-3 py-2 text-left text-xs font-medium whitespace-nowrap text-muted-foreground ${c.hideOnMobile ? "hidden md:table-cell" : ""}`}
                >
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 hover:text-foreground"
                    onClick={() => onSort(c.key)}
                  >
                    {c.label}
                    {sortKey === c.key ? (
                      sortDir === "asc" ? (
                        <ArrowUp className="size-3" />
                      ) : (
                        <ArrowDown className="size-3" />
                      )
                    ) : null}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groups.map((g) => (
              <GroupBody
                key={g.key}
                group={g}
                cols={cols}
                selectedId={selectedId}
                setSelected={setSelected}
                setHovered={setHovered}
                setHoverPos={setHoverPos}
                showHeader={!!groupBy}
              />
            ))}
            {sorted.length === 0 ? (
              <tr>
                <td colSpan={cols.length} className="px-3 py-16 text-center text-muted-foreground">
                  No accounts match the current filters.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
      {hovered && hoverPos ? (
        <div
          className="pointer-events-none absolute z-20"
          style={{
            left: Math.min(hoverPos.x + 16, 420),
            top: hoverPos.y + 12,
          }}
        >
          <AccountHoverCard
            account={hovered}
            kitchen={kitchens.find((k) => k.id === hovered.kitchenId)}
          />
        </div>
      ) : null}
    </div>
  );
}

function GroupBody({
  group,
  cols,
  selectedId,
  setSelected,
  setHovered,
  setHoverPos,
  showHeader,
}: {
  group: { key: string; label: string; rows: AccountRecord[] };
  cols: Col[];
  selectedId: string | null;
  setSelected: (id: string | null, open?: boolean) => void;
  setHovered: (id: string | null) => void;
  setHoverPos: (p: { x: number; y: number } | null) => void;
  showHeader: boolean;
}) {
  return (
    <>
      {showHeader ? (
        <tr>
          <td
            colSpan={cols.length}
            className="bg-muted/70 px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            {group.label}
            <span className="ml-2 tabular">{group.rows.length}</span>
          </td>
        </tr>
      ) : null}
      {group.rows.map((r) => {
        const meta = STATUS_META[r.status];
        const selected = selectedId === r.id;
        return (
          <tr
            key={r.id}
            className="cursor-pointer hover:bg-accent/60"
            style={{
              background: selected ? "color-mix(in oklab, var(--color-accent) 70%, white)" : undefined,
            }}
            onClick={() => setSelected(r.id, true)}
            onMouseEnter={(e) => {
              setHovered(r.id);
              const rect = (e.currentTarget.closest(".relative") as HTMLElement)?.getBoundingClientRect();
              if (rect) {
                setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }
            }}
            onMouseMove={(e) => {
              const rect = (e.currentTarget.closest(".relative") as HTMLElement)?.getBoundingClientRect();
              if (rect) setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            onMouseLeave={() => {
              setHovered(null);
              setHoverPos(null);
            }}
          >
            {cols.map((c, i) => (
              <td
                key={c.key}
                className={`border-b px-3 py-2.5 whitespace-nowrap ${c.hideOnMobile ? "hidden md:table-cell" : ""}`}
                style={
                  i === 0
                    ? { boxShadow: `inset 3px 0 0 ${meta.hex}` }
                    : undefined
                }
              >
                {c.render ? c.render(r) : String(r[c.key] || "—")}
              </td>
            ))}
          </tr>
        );
      })}
    </>
  );
}

function groupRows(
  rows: AccountRecord[],
  groupBy: GroupByField,
  kitchenName: (id: string) => string,
): { key: string; label: string; rows: AccountRecord[] }[] {
  if (!groupBy) return [{ key: "all", label: "All", rows }];
  const map = new Map<string, AccountRecord[]>();
  for (const r of rows) {
    let key = "—";
    if (groupBy === "status") key = STATUS_META[r.status].label;
    else if (groupBy === "kitchenId") key = kitchenName(r.kitchenId);
    else key = String(r[groupBy] || "—");
    const list = map.get(key) ?? [];
    list.push(r);
    map.set(key, list);
  }
  return Array.from(map.entries()).map(([label, group]) => ({
    key: label,
    label,
    rows: group,
  }));
}
