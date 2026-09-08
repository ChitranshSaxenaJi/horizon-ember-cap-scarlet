import { useEffect, useState, type ComponentType } from "react";
import type { AccountRecord } from "@/lib/types";

export function MapPane({ rows }: { rows: AccountRecord[] }) {
  const [MapView, setMapView] = useState<ComponentType<{ rows: AccountRecord[] }> | null>(null);

  useEffect(() => {
    let alive = true;
    void import("./account-map").then((mod) => {
      if (alive) setMapView(() => mod.AccountMap);
    });
    return () => {
      alive = false;
    };
  }, []);

  if (!MapView) {
    return (
      <div className="flex h-full min-h-[420px] items-center justify-center rounded-lg bg-card text-sm text-muted-foreground shadow-[var(--shadow-border)]">
        Loading map…
      </div>
    );
  }
  return <MapView rows={rows} />;
}
