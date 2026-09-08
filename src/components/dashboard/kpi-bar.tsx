import type { KpiSnapshot } from "@/lib/types";
import { formatINR, formatPax } from "@/lib/utils";
import { cn } from "@/lib/utils";

const CARDS: { key: keyof KpiSnapshot; label: string; format?: "inr" | "pax" }[] = [
  { key: "total", label: "Accounts" },
  { key: "existing", label: "Existing" },
  { key: "pipeline", label: "Pipeline" },
  { key: "fy26", label: "FY26" },
  { key: "fy27", label: "FY27" },
  { key: "fy28", label: "FY28" },
  { key: "proposalDev", label: "Prop. dev" },
  { key: "proposalSub", label: "Submitted" },
  { key: "won", label: "Won" },
  { key: "lost", label: "Lost" },
  { key: "totalPax", label: "Total pax", format: "pax" },
  { key: "pipelineRevenue", label: "Est. value", format: "inr" },
];

export function KpiBar({ kpis }: { kpis: KpiSnapshot }) {
  return (
    <div className="atlas-scroll flex gap-2 overflow-x-auto pb-1 md:grid md:grid-cols-6 md:overflow-visible lg:grid-cols-12">
      {CARDS.map((c) => {
        const raw = kpis[c.key];
        const value =
          c.format === "inr"
            ? formatINR(raw)
            : c.format === "pax"
              ? formatPax(raw)
              : raw.toLocaleString("en-IN");
        return (
          <div
            key={c.key}
            className={cn(
              "min-w-32 shrink-0 rounded-lg bg-card px-3 py-2.5 shadow-[var(--shadow-border)] md:min-w-0",
            )}
          >
            <p className="text-xs text-muted-foreground">{c.label}</p>
            <p className="mt-1 font-serif text-lg leading-none font-medium tracking-tight tabular">
              {value}
            </p>
          </div>
        );
      })}
    </div>
  );
}
