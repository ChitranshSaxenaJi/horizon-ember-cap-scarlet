export const PIPELINE_STATUS_IDS = [
  "universe",
  "prospect_research",
  "pipeline_fy26",
  "pipeline_fy27",
  "pipeline_fy28",
  "proposal_development",
  "proposal_submitted",
  "won",
  "lost",
  "existing_client",
] as const;

export type PipelineStatusId = (typeof PIPELINE_STATUS_IDS)[number];

export const PIPELINE_FYS = ["FY26", "FY27", "FY28"] as const;
export type PipelineFy = (typeof PIPELINE_FYS)[number] | "";

export const BUSINESS_TYPES = [
  "B&I",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Other",
] as const;
export type BusinessType = (typeof BUSINESS_TYPES)[number];

export const MAP_TYPES = ["Map 1", "Map 2", "Mix"] as const;
export type MapType = (typeof MAP_TYPES)[number] | "";

export const ACCOUNT_TYPES = [
  "New Logo",
  "Existing Expansion",
  "Strategic",
  "Retention",
] as const;
export type AccountType = (typeof ACCOUNT_TYPES)[number];

export const PROPOSAL_STAGES = [
  "Discovery",
  "Needs Assessment",
  "Solution Design",
  "Commercials",
  "Legal",
  "Submitted",
  "Negotiation",
  "Closed Won",
  "Closed Lost",
  "Live",
  "",
] as const;
export type ProposalStage = (typeof PROPOSAL_STAGES)[number];

/** Central Kitchen / CPU master */
export interface CentralKitchen {
  id: string;
  name: string;
  city: string;
  state: string;
  address: string;
  lat: number;
  lng: number;
}

/**
 * Site-level pipeline row.
 * Grain is a site (one client may have multiple sites via accountId).
 * Conceptual split: Account Master + Site Master + Opportunity + Activity,
 * stored denormalized for Excel round-trip and table performance.
 */
export interface AccountRecord {
  id: string;
  accountId: string;
  clientName: string;
  accountType: AccountType;
  industry: string;
  siteId: string;
  siteName: string;
  city: string;
  state: string;
  address: string;
  lat: number;
  lng: number;
  opportunityId: string;
  status: PipelineStatusId;
  pipelineFy: PipelineFy;
  probability: number;
  expectedClosureDate: string;
  owner: string;
  proposalStage: string;
  estimatedRevenue: number;
  estimatedPax: number;
  businessType: BusinessType;
  mapType: MapType;
  paxBeingServed: number;
  servicesRequired: string;
  kitchenId: string;
  distanceKm: number | null;
  roadDistanceKm: number | null;
  travelMinutes: number | null;
  lastActivity: string;
  lastActivityDate: string;
  nextAction: string;
  nextActionDate: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface Filters {
  statuses: PipelineStatusId[];
  fys: string[];
  accountTypes: string[];
  industries: string[];
  cities: string[];
  states: string[];
  owners: string[];
  mapTypes: string[];
  kitchens: string[];
  businessTypes: string[];
  proposalStages: string[];
  paxMin: number | null;
  paxMax: number | null;
  revenueMin: number | null;
  revenueMax: number | null;
  distanceMax: number | null;
}

export const EMPTY_FILTERS: Filters = {
  statuses: [],
  fys: [],
  accountTypes: [],
  industries: [],
  cities: [],
  states: [],
  owners: [],
  mapTypes: [],
  kitchens: [],
  businessTypes: [],
  proposalStages: [],
  paxMin: null,
  paxMax: null,
  revenueMin: null,
  revenueMax: null,
  distanceMax: null,
};

export interface KpiSnapshot {
  total: number;
  existing: number;
  pipeline: number;
  fy26: number;
  fy27: number;
  fy28: number;
  proposalDev: number;
  proposalSub: number;
  won: number;
  lost: number;
  totalPax: number;
  pipelineRevenue: number;
}

export interface NearestHit {
  id: string;
  clientName: string;
  siteName: string;
  city: string;
  status: PipelineStatusId;
  km: number;
}

export type InsightKind =
  | "near_existing"
  | "cluster"
  | "near_cpu"
  | "high_pax"
  | "stale"
  | "closing_soon"
  | "lost_near_won"
  | "city_concentration"
  | "cluster_geo"
  | "existing_with_prospects";

export interface Insight {
  id: string;
  kind: InsightKind;
  title: string;
  detail: string;
  accountIds: string[];
  severity: "high" | "medium" | "info";
}

export type ViewMode = "table" | "map";
export type GroupByField =
  | ""
  | "status"
  | "city"
  | "state"
  | "owner"
  | "industry"
  | "businessType"
  | "pipelineFy"
  | "kitchenId";

export type ImportDecision = "update" | "skip" | "create";

export interface MappedRow {
  rowNumber: number;
  raw: Record<string, unknown>;
  data: Partial<AccountRecord>;
  errors: string[];
  warnings: string[];
  matchId: string | null;
  decision: ImportDecision;
}

export interface ColumnMapping {
  source: string;
  field: keyof AccountRecord | "";
}
