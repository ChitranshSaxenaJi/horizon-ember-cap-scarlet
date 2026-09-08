import type { AccountRecord, CentralKitchen, NearestHit } from "./types";

const EARTH_KM = 6371;

export function haversineKm(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): number {
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * EARTH_KM * Math.asin(Math.min(1, Math.sqrt(h)));
}

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

/** India urban/peri-urban circuity factor for straight-line → road km. */
export function roadDistanceKm(straightKm: number): number {
  return straightKm * 1.34;
}

/** Mixed urban speed ~28 km/h including congestion. */
export function travelMinutes(roadKm: number): number {
  return Math.round((roadKm / 28) * 60);
}

export function kitchenMetrics(
  site: { lat: number; lng: number },
  kitchen: CentralKitchen | undefined,
): Pick<AccountRecord, "distanceKm" | "roadDistanceKm" | "travelMinutes"> {
  if (!kitchen) {
    return { distanceKm: null, roadDistanceKm: null, travelMinutes: null };
  }
  const straight = haversineKm(site, kitchen);
  const road = roadDistanceKm(straight);
  return {
    distanceKm: round1(straight),
    roadDistanceKm: round1(road),
    travelMinutes: travelMinutes(road),
  };
}

export function applyKitchen(
  record: AccountRecord,
  kitchens: CentralKitchen[],
): AccountRecord {
  const kitchen = kitchens.find((k) => k.id === record.kitchenId);
  return { ...record, ...kitchenMetrics(record, kitchen) };
}

export function nearestSites(
  origin: AccountRecord,
  all: AccountRecord[],
  radiusKm: number,
  limit = 8,
): NearestHit[] {
  return all
    .filter((r) => r.id !== origin.id && Number.isFinite(r.lat) && Number.isFinite(r.lng))
    .map((r) => ({
      id: r.id,
      clientName: r.clientName,
      siteName: r.siteName,
      city: r.city,
      status: r.status,
      km: haversineKm(origin, r),
    }))
    .filter((h) => h.km <= radiusKm)
    .sort((a, b) => a.km - b.km)
    .slice(0, limit)
    .map((h) => ({ ...h, km: round1(h.km) }));
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

export function isLikelyIndia(lat: number, lng: number): boolean {
  return lat >= 6.5 && lat <= 37.5 && lng >= 68 && lng <= 97.5;
}
