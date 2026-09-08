import type { Insight } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useDashboard } from "@/lib/store";
import { Lightbulb } from "lucide-react";

export function InsightsPanel({
  insights,
  onFocus,
}: {
  insights: Insight[];
  onFocus: (ids: string[]) => void;
}) {
  const insightsOpen = useDashboard((s) => s.insightsOpen);
  const setInsightsOpen = useDashboard((s) => s.setInsightsOpen);

  if (!insightsOpen) {
    return (
      <button
        type="button"
        onClick={() => setInsightsOpen(true)}
        className="inline-flex h-9 items-center gap-2 rounded-full bg-card px-3 text-sm shadow-[var(--shadow-border)]"
      >
        <Lightbulb className="size-4" />
        Opportunity insights
        <span className="tabular text-muted-foreground">{insights.length}</span>
      </button>
    );
  }

  return (
    <section className="rounded-lg bg-card p-3 shadow-[var(--shadow-border)]">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-sm font-medium">
          <Lightbulb className="size-4 text-primary" />
          Opportunity insights
        </h2>
        <button
          type="button"
          className="text-xs text-muted-foreground hover:text-foreground"
          onClick={() => setInsightsOpen(false)}
        >
          Hide
        </button>
      </div>
      <div className="atlas-scroll grid gap-2 md:grid-cols-2 xl:grid-cols-3">
        {insights.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No insights for the current filter set.
          </p>
        ) : (
          insights.map((ins) => (
            <button
              key={ins.id}
              type="button"
              onClick={() => onFocus(ins.accountIds)}
              className="rounded-md bg-background p-3 text-left transition-colors hover:bg-accent"
            >
              <p className="flex items-center gap-2 text-sm font-medium">
                <span
                  className={cn(
                    "size-1.5 rounded-full",
                    ins.severity === "high" ? "bg-destructive" : "bg-primary",
                  )}
                />
                {ins.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{ins.detail}</p>
            </button>
          ))
        )}
      </div>
    </section>
  );
}
