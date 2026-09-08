import { STATUS_META } from "@/lib/constants";
import type { AccountRecord, CentralKitchen } from "@/lib/types";
import { formatINR, formatKm, formatPax } from "@/lib/utils";
import { StatusDot } from "./status-badge";

export function AccountHoverCard({
  account,
  kitchen,
}: {
  account: AccountRecord;
  kitchen?: CentralKitchen;
}) {
  const meta = STATUS_META[account.status];
  return (
    <div className="w-72 rounded-lg bg-card p-3 text-card-foreground shadow-[var(--shadow-border)]">
      <p className="font-medium leading-snug">
        {account.clientName}
        <span className="text-muted-foreground"> — {account.siteName}</span>
      </p>
      <p className="mt-1 text-xs text-muted-foreground">
        {account.industry} · {account.businessType}
      </p>
      <div className="mt-2 flex items-center gap-1.5 text-xs">
        <StatusDot status={account.status} />
        <span style={{ color: meta.hex }}>{meta.label}</span>
        {account.pipelineFy ? (
          <span className="text-muted-foreground">· {account.pipelineFy}</span>
        ) : null}
      </div>
      <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
        <div>
          <dt className="text-muted-foreground">Pax</dt>
          <dd className="tabular font-medium">{formatPax(account.estimatedPax)}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Est. revenue</dt>
          <dd className="tabular font-medium">{formatINR(account.estimatedRevenue)}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Map type</dt>
          <dd>{account.mapType || "—"}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">CPU</dt>
          <dd className="truncate">{kitchen?.name ?? "Unassigned"}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Distance</dt>
          <dd className="tabular">{formatKm(account.distanceKm)}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">City</dt>
          <dd>{account.city}</dd>
        </div>
      </dl>
    </div>
  );
}
