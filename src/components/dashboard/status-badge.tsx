import { STATUS_META } from "@/lib/constants";
import type { PipelineStatusId } from "@/lib/types";
import { cn } from "@/lib/utils";

export function StatusDot({
  status,
  size = "sm",
}: {
  status: PipelineStatusId;
  size?: "sm" | "md";
}) {
  const meta = STATUS_META[status];
  return (
    <span
      className={cn("inline-block shrink-0 rounded-full", size === "sm" ? "size-2.5" : "size-3")}
      style={{ background: meta.hex }}
      aria-hidden
    />
  );
}

export function StatusBadge({ status }: { status: PipelineStatusId }) {
  const meta = STATUS_META[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap"
      style={{ background: `${meta.hex}22`, color: meta.hex }}
    >
      <StatusDot status={status} />
      {meta.label}
    </span>
  );
}
