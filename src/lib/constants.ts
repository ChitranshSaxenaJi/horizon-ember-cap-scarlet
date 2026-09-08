import type { AccountRecord, PipelineStatusId } from "./types";

export const APP_NAME = "Siteline";
export const APP_TAGLINE = "Pipeline account intelligence";

export interface StatusMeta {
  id: PipelineStatusId;
  label: string;
  hex: string;
  fg: string;
  short: string;
}

export const STATUS_META: Record<PipelineStatusId, StatusMeta> = {
  universe: {
    id: "universe",
    label: "Universe",
    hex: "#6b5b95",
    fg: "#f7f4ee",
    short: "UNV",
  },
  prospect_research: {
    id: "prospect_research",
    label: "Prospect Research",
    hex: "#2b6cb0",
    fg: "#f7f4ee",
    short: "RES",
  },
  pipeline_fy26: {
    id: "pipeline_fy26",
    label: "Pipeline FY26",
    hex: "#b45309",
    fg: "#fff8eb",
    short: "26",
  },
  pipeline_fy27: {
    id: "pipeline_fy27",
    label: "Pipeline FY27",
    hex: "#c05621",
    fg: "#fff6ed",
    short: "27",
  },
  pipeline_fy28: {
    id: "pipeline_fy28",
    label: "Pipeline FY28",
    hex: "#2f855a",
    fg: "#f1fff6",
    short: "28",
  },
  proposal_development: {
    id: "proposal_development",
    label: "Proposal Development",
    hex: "#7c4a28",
    fg: "#faf3eb",
    short: "DEV",
  },
  proposal_submitted: {
    id: "proposal_submitted",
    label: "Proposal Submitted",
    hex: "#1d6a8a",
    fg: "#eef8fb",
    short: "SUB",
  },
  won: {
    id: "won",
    label: "Won",
    hex: "#276749",
    fg: "#ecfdf3",
    short: "WON",
  },
  lost: {
    id: "lost",
    label: "Lost",
    hex: "#c53030",
    fg: "#fff5f5",
    short: "LST",
  },
  existing_client: {
    id: "existing_client",
    label: "Existing Client",
    hex: "#5c5a56",
    fg: "#f4f1ea",
    short: "EX",
  },
};

export const STATUS_LIST = Object.values(STATUS_META);

export const ACTIVE_PIPELINE_STATUSES: PipelineStatusId[] = [
  "prospect_research",
  "pipeline_fy26",
  "pipeline_fy27",
  "pipeline_fy28",
  "proposal_development",
  "proposal_submitted",
];

export const INDUSTRIES = [
  "IT / ITeS",
  "BFSI",
  "Automotive",
  "Pharma",
  "Engineering",
  "Healthcare Provider",
  "Higher Education",
  "K-12 Education",
  "FMCG",
  "Telecom",
  "Retail",
  "Logistics",
  "Energy",
  "SEZ / Campus",
];

export const OWNERS = [
  "Ananya Sharma",
  "Rohan Mehta",
  "Priya Nair",
  "Vikram Singh",
  "Neha Kapoor",
  "Arjun Reddy",
  "Meera Iyer",
  "Kabir Khan",
];

export const TABLE_COLUMNS: { key: keyof AccountRecord; label: string; group: string }[] = [
  { key: "clientName", label: "Client", group: "Account" },
  { key: "siteName", label: "Site", group: "Account" },
  { key: "accountType", label: "Account Type", group: "Account" },
  { key: "industry", label: "Industry", group: "Account" },
  { key: "city", label: "City", group: "Account" },
  { key: "state", label: "State", group: "Account" },
  { key: "address", label: "Address", group: "Account" },
  { key: "lat", label: "Latitude", group: "Account" },
  { key: "lng", label: "Longitude", group: "Account" },
  { key: "status", label: "Pipeline Status", group: "Pipeline" },
  { key: "pipelineFy", label: "Pipeline FY", group: "Pipeline" },
  { key: "probability", label: "Probability %", group: "Pipeline" },
  { key: "expectedClosureDate", label: "Expected Closure", group: "Pipeline" },
  { key: "owner", label: "Opportunity Owner", group: "Pipeline" },
  { key: "proposalStage", label: "Proposal Stage", group: "Pipeline" },
  { key: "estimatedRevenue", label: "Est. Revenue", group: "Pipeline" },
  { key: "estimatedPax", label: "Est. Pax", group: "Pipeline" },
  { key: "lastActivity", label: "Last Activity", group: "Pipeline" },
  { key: "lastActivityDate", label: "Last Activity Date", group: "Pipeline" },
  { key: "nextAction", label: "Next Action", group: "Pipeline" },
  { key: "nextActionDate", label: "Next Action Date", group: "Pipeline" },
  { key: "businessType", label: "Business Type", group: "Operations" },
  { key: "mapType", label: "Map Type", group: "Operations" },
  { key: "paxBeingServed", label: "Pax Being Served", group: "Operations" },
  { key: "servicesRequired", label: "Services", group: "Operations" },
  { key: "kitchenId", label: "Central Kitchen", group: "Operations" },
  { key: "distanceKm", label: "Distance (km)", group: "Operations" },
  { key: "roadDistanceKm", label: "Road Distance (km)", group: "Operations" },
  { key: "travelMinutes", label: "Travel Time", group: "Operations" },
  { key: "notes", label: "Notes", group: "Activity" },
];

export const DEFAULT_VISIBLE_COLUMNS: (keyof AccountRecord)[] = [
  "clientName",
  "siteName",
  "status",
  "pipelineFy",
  "city",
  "industry",
  "businessType",
  "owner",
  "estimatedPax",
  "estimatedRevenue",
  "kitchenId",
  "distanceKm",
  "mapType",
];

export const FIELD_ALIASES: Record<string, keyof AccountRecord> = {
  "client / account name": "clientName",
  "client/account name": "clientName",
  "account name": "clientName",
  client: "clientName",
  "client name": "clientName",
  account: "clientName",
  "site name": "siteName",
  site: "siteName",
  "account type": "accountType",
  "industry / segment": "industry",
  industry: "industry",
  segment: "industry",
  city: "city",
  state: "state",
  "full address": "address",
  address: "address",
  latitude: "lat",
  lat: "lat",
  longitude: "lng",
  lng: "lng",
  long: "lng",
  "pipeline status": "status",
  status: "status",
  "pipeline fy": "pipelineFy",
  fy: "pipelineFy",
  "probability %": "probability",
  probability: "probability",
  "expected closure date": "expectedClosureDate",
  "expected closure": "expectedClosureDate",
  "opportunity owner": "owner",
  owner: "owner",
  "proposal stage": "proposalStage",
  "estimated revenue": "estimatedRevenue",
  revenue: "estimatedRevenue",
  "est. revenue": "estimatedRevenue",
  "estimated pax": "estimatedPax",
  pax: "estimatedPax",
  "last activity": "lastActivity",
  "next action": "nextAction",
  "next action date": "nextActionDate",
  "business type": "businessType",
  "map type": "mapType",
  "pax being served": "paxBeingServed",
  "services required": "servicesRequired",
  services: "servicesRequired",
  "central kitchen / cpu": "kitchenId",
  "central kitchen": "kitchenId",
  cpu: "kitchenId",
  "distance from central kitchen": "distanceKm",
  "travel time from central kitchen": "travelMinutes",
  notes: "notes",
};

export const RADIUS_OPTIONS = [5, 10, 25, 50] as const;

export const INDIA_CENTER: [number, number] = [21.5, 79.0];
export const INDIA_BOUNDS: [[number, number], [number, number]] = [
  [6.5, 68.0],
  [37.5, 97.5],
];
