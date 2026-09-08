import { useEffect, useMemo } from "react";
import {
  CircleMarker,
  MapContainer,
  Polyline,
  TileLayer,
  Tooltip,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { INDIA_CENTER, RADIUS_OPTIONS, STATUS_META } from "@/lib/constants";
import { nearestSites } from "@/lib/geo";
import { useDashboard } from "@/lib/store";
import type { AccountRecord } from "@/lib/types";
import { AccountHoverCard } from "./hover-card";
import { StatusDot } from "./status-badge";

export function AccountMap({ rows }: { rows: AccountRecord[] }) {
  const accounts = useDashboard((s) => s.accounts);
  const kitchens = useDashboard((s) => s.kitchens);
  const selectedId = useDashboard((s) => s.selectedId);
  const setSelected = useDashboard((s) => s.setSelected);
  const setHovered = useDashboard((s) => s.setHovered);
  const nearestId = useDashboard((s) => s.nearestId);
  const nearestRadius = useDashboard((s) => s.nearestRadius);
  const setNearestRadius = useDashboard((s) => s.setNearestRadius);
  const showCpuLinks = useDashboard((s) => s.showCpuLinks);
  const setShowCpuLinks = useDashboard((s) => s.setShowCpuLinks);

  const origin = accounts.find((a) => a.id === nearestId) ?? null;
  const nearest = origin ? nearestSites(origin, accounts, nearestRadius) : [];
  const nearestIds = new Set(nearest.map((n) => n.id));

  const cpuLines = useMemo(() => {
    if (!showCpuLinks) return [];
    return rows.flatMap((r) => {
      const k = kitchens.find((x) => x.id === r.kitchenId);
      if (!k || !r.lat || !r.lng) return [];
      return [{ from: r, to: k }];
    });
  }, [showCpuLinks, rows, kitchens]);

  const points = rows
    .filter((r) => Number.isFinite(r.lat) && Number.isFinite(r.lng) && r.lat !== 0)
    .map((r) => [r.lat, r.lng] as [number, number]);

  return (
    <div className="relative h-full min-h-[420px] overflow-hidden rounded-lg bg-card shadow-[var(--shadow-border)]">
      <MapContainer
        center={INDIA_CENTER}
        zoom={5}
        className="h-full w-full"
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <FitPoints points={points} signature={rows.map((r) => r.id).join(",")} />
        <InvalidateSize />
        {cpuLines.map((l) => (
          <Polyline
            key={`cpu-${l.from.id}`}
            positions={[
              [l.from.lat, l.from.lng],
              [l.to.lat, l.to.lng],
            ]}
            pathOptions={{
              color: "#1f4d3a",
              weight: 1.25,
              opacity: 0.45,
              dashArray: "4 6",
            }}
          />
        ))}
        {origin
          ? nearest.map((n) => {
              const target = accounts.find((a) => a.id === n.id);
              if (!target) return null;
              return (
                <Polyline
                  key={`near-${n.id}`}
                  positions={[
                    [origin.lat, origin.lng],
                    [target.lat, target.lng],
                  ]}
                  pathOptions={{ color: "#1f4d3a", weight: 2, opacity: 0.7 }}
                />
              );
            })
          : null}
        {kitchens.map((k) => (
          <CircleMarker
            key={k.id}
            center={[k.lat, k.lng]}
            radius={9}
            pathOptions={{
              color: "#1f4d3a",
              fillColor: "#1f4d3a",
              fillOpacity: 0.15,
              weight: 2,
            }}
          >
            <Tooltip direction="top" offset={[0, -8]}>
              <span className="text-xs font-medium">{k.name}</span>
            </Tooltip>
          </CircleMarker>
        ))}
        {rows.map((r) => {
          if (!Number.isFinite(r.lat) || !Number.isFinite(r.lng) || r.lat === 0) return null;
          const meta = STATUS_META[r.status];
          const isOrigin = origin?.id === r.id;
          const isNear = nearestIds.has(r.id);
          const dim = origin ? !isOrigin && !isNear : false;
          return (
            <CircleMarker
              key={r.id}
              center={[r.lat, r.lng]}
              radius={isOrigin ? 12 : isNear ? 9 : 7}
              pathOptions={{
                color: meta.hex,
                fillColor: meta.hex,
                fillOpacity: dim ? 0.2 : 0.9,
                weight: isOrigin ? 3 : 1.5,
                opacity: dim ? 0.35 : 1,
              }}
              eventHandlers={{
                click: () => setSelected(r.id, true),
                mouseover: () => setHovered(r.id),
                mouseout: () => setHovered(null),
              }}
            >
              <Tooltip
                className="atlas-tip"
                direction="top"
                offset={[0, -10]}
                opacity={1}
              >
                <AccountHoverCard
                  account={r}
                  kitchen={kitchens.find((k) => k.id === r.kitchenId)}
                />
              </Tooltip>
            </CircleMarker>
          );
        })}
      </MapContainer>

      <div className="absolute top-3 left-3 z-[400] max-w-[calc(100%-1.5rem)] space-y-2">
        <div className="flex flex-wrap items-center gap-2 rounded-lg bg-card/95 p-2 shadow-[var(--shadow-border)] backdrop-blur-sm">
          <label className="flex items-center gap-2 px-1 text-xs">
            <input
              type="checkbox"
              checked={showCpuLinks}
              onChange={(e) => setShowCpuLinks(e.target.checked)}
            />
            CPU links
          </label>
          {origin ? (
            <>
              <span className="text-xs text-muted-foreground">Radius</span>
              {RADIUS_OPTIONS.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setNearestRadius(r)}
                  className="h-7 rounded-full px-2.5 text-xs"
                  style={{
                    background:
                      nearestRadius === r ? "var(--color-primary)" : "var(--color-muted)",
                    color:
                      nearestRadius === r
                        ? "var(--color-primary-foreground)"
                        : "var(--color-foreground)",
                  }}
                >
                  {r} km
                </button>
              ))}
            </>
          ) : null}
        </div>
        {origin ? (
          <div className="max-h-56 w-72 overflow-auto rounded-lg bg-card/95 p-3 shadow-[var(--shadow-border)] atlas-scroll">
            <p className="text-xs text-muted-foreground">Nearest sites</p>
            <p className="text-sm font-medium">
              {origin.clientName} — {origin.siteName}
            </p>
            <ol className="mt-2 space-y-1.5">
              {nearest.length === 0 ? (
                <li className="text-xs text-muted-foreground">None within {nearestRadius} km.</li>
              ) : (
                nearest.map((n, i) => (
                  <li key={n.id}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-2 text-left text-xs"
                      onClick={() => setSelected(n.id, true)}
                    >
                      <span className="flex min-w-0 items-center gap-1.5">
                        <span className="tabular text-muted-foreground">{i + 1}.</span>
                        <StatusDot status={n.status} />
                        <span className="truncate">
                          {n.clientName} — {n.siteName}
                        </span>
                      </span>
                      <span className="tabular text-muted-foreground">{n.km.toFixed(1)} km</span>
                    </button>
                  </li>
                ))
              )}
            </ol>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function InvalidateSize() {
  const map = useMap();
  useEffect(() => {
    const t = window.setTimeout(() => map.invalidateSize(), 80);
    return () => window.clearTimeout(t);
  }, [map]);
  return null;
}

function FitPoints({
  points,
  signature,
}: {
  points: [number, number][];
  signature: string;
}) {
  const map = useMap();
  useEffect(() => {
    if (points.length === 0) {
      map.setView(INDIA_CENTER, 5);
      return;
    }
    if (points.length === 1) {
      map.setView(points[0], 11);
      return;
    }
    map.fitBounds(points, { padding: [36, 36], maxZoom: 11 });
  }, [signature, map]);
  return null;
}
