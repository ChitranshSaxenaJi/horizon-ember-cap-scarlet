import type { ReactNode } from "react";
import { RADIUS_OPTIONS } from "@/lib/constants";
import { nearestSites } from "@/lib/geo";
import { useDashboard } from "@/lib/store";
import {
  formatDate,
  formatINR,
  formatKm,
  formatPax,
  formatTravel,
} from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "./status-badge";
import { MapPin, Pencil, Route, X } from "lucide-react";

export function AccountProfile() {
  const accounts = useDashboard((s) => s.accounts);
  const kitchens = useDashboard((s) => s.kitchens);
  const selectedId = useDashboard((s) => s.selectedId);
  const profileOpen = useDashboard((s) => s.profileOpen);
  const setSelected = useDashboard((s) => s.setSelected);
  const setFormMode = useDashboard((s) => s.setFormMode);
  const setNearest = useDashboard((s) => s.setNearest);
  const nearestRadius = useDashboard((s) => s.nearestRadius);
  const deleteAccount = useDashboard((s) => s.deleteAccount);

  const rec = accounts.find((a) => a.id === selectedId);
  if (!profileOpen || !rec) return null;

  const kitchen = kitchens.find((k) => k.id === rec.kitchenId);
  const nearby = nearestSites(rec, accounts, nearestRadius);

  return (
    <aside className="absolute inset-y-0 right-0 z-30 flex w-full max-w-md flex-col bg-card shadow-[var(--shadow-border)] md:rounded-l-xl">
      <header className="flex items-start justify-between gap-3 border-b px-5 py-4">
        <div className="min-w-0">
          <p className="font-serif text-lg leading-tight font-medium">{rec.clientName}</p>
          <p className="mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="size-3.5" />
            {rec.siteName} · {rec.city}
          </p>
        </div>
        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-md hover:bg-muted"
          onClick={() => setSelected(rec.id, false)}
          aria-label="Close profile"
        >
          <X className="size-4" />
        </button>
      </header>
      <div className="atlas-scroll flex-1 space-y-6 overflow-y-auto px-5 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={rec.status} />
          {rec.pipelineFy ? (
            <span className="rounded-full bg-muted px-2 py-0.5 text-xs">{rec.pipelineFy}</span>
          ) : null}
          <span className="rounded-full bg-muted px-2 py-0.5 text-xs">{rec.accountType}</span>
        </div>

        <Section title="Account">
          <Row k="Industry" v={rec.industry} />
          <Row k="Business type" v={rec.businessType} />
          <Row k="Address" v={rec.address} />
          <Row k="Coordinates" v={`${rec.lat.toFixed(4)}, ${rec.lng.toFixed(4)}`} />
        </Section>

        <Section title="Pipeline">
          <Row k="Probability" v={rec.probability ? `${rec.probability}%` : "—"} />
          <Row k="Expected closure" v={formatDate(rec.expectedClosureDate)} />
          <Row k="Owner" v={rec.owner} />
          <Row k="Proposal stage" v={rec.proposalStage || "—"} />
          <Row k="Est. revenue" v={formatINR(rec.estimatedRevenue)} />
          <Row k="Est. pax" v={formatPax(rec.estimatedPax)} />
        </Section>

        <Section title="Operations">
          <Row k="Map type" v={rec.mapType || "—"} />
          <Row k="Pax being served" v={formatPax(rec.paxBeingServed)} />
          <Row k="Services" v={rec.servicesRequired || "—"} />
          <Row k="Central kitchen" v={kitchen?.name ?? "Unassigned"} />
          <Row k="Straight-line" v={formatKm(rec.distanceKm)} />
          <Row k="Road (est.)" v={formatKm(rec.roadDistanceKm)} />
          <Row k="Travel time" v={formatTravel(rec.travelMinutes)} />
        </Section>

        <Section title="Activity">
          <Row
            k="Last activity"
            v={`${rec.lastActivity || "—"} · ${formatDate(rec.lastActivityDate)}`}
          />
          <Row
            k="Next action"
            v={`${rec.nextAction || "—"} · ${formatDate(rec.nextActionDate)}`}
          />
          {rec.notes ? <p className="pt-1 text-sm leading-relaxed">{rec.notes}</p> : null}
        </Section>

        <Section title="Nearest sites">
          <div className="mb-2 flex flex-wrap gap-1">
            {RADIUS_OPTIONS.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setNearest(rec.id, r)}
                className="h-7 rounded-full bg-muted px-2.5 text-xs"
              >
                {r} km
              </button>
            ))}
          </div>
          <ol className="space-y-1">
            {nearby.slice(0, 5).map((n, i) => (
              <li key={n.id} className="flex justify-between text-sm">
                <button
                  type="button"
                  className="text-left hover:underline"
                  onClick={() => setSelected(n.id, true)}
                >
                  {i + 1}. {n.clientName}
                </button>
                <span className="tabular text-muted-foreground">{n.km.toFixed(1)} km</span>
              </li>
            ))}
          </ol>
        </Section>
      </div>
      <footer className="flex gap-2 border-t px-5 py-3">
        <Button className="flex-1" onClick={() => setNearest(rec.id)}>
          <Route className="size-4" />
          Find nearest
        </Button>
        <Button variant="outline" onClick={() => setFormMode("edit")}>
          <Pencil className="size-4" />
          Edit
        </Button>
        <Button
          variant="ghost"
          className="text-destructive"
          onClick={() => {
            if (confirm(`Remove ${rec.clientName} — ${rec.siteName}?`)) deleteAccount(rec.id);
          }}
        >
          Delete
        </Button>
      </footer>
    </aside>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {title}
      </h3>
      <dl className="space-y-1.5">{children}</dl>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-2 text-sm">
      <dt className="text-muted-foreground">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
