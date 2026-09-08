import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as CheckboxIndicator, p as require_jsx_runtime, s as Slot, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { _ as ArrowDown, a as Search, c as Pencil, d as Lightbulb, f as Funnel, g as ArrowUp, h as Check, i as Table2, l as Map$1, m as Download, n as Upload, o as Route, p as Ellipsis, s as Plus, t as X, u as MapPin } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as utils, r as writeSync, t as readSync } from "../_libs/xlsx.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { a as Separator2, i as Root2, n as Item2, o as Trigger, r as Portal2, t as Content2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-AvT6LAuR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var STATUS_META = {
	universe: {
		id: "universe",
		label: "Universe",
		hex: "#6b5b95",
		fg: "#f7f4ee",
		short: "UNV"
	},
	prospect_research: {
		id: "prospect_research",
		label: "Prospect Research",
		hex: "#2b6cb0",
		fg: "#f7f4ee",
		short: "RES"
	},
	pipeline_fy26: {
		id: "pipeline_fy26",
		label: "Pipeline FY26",
		hex: "#b45309",
		fg: "#fff8eb",
		short: "26"
	},
	pipeline_fy27: {
		id: "pipeline_fy27",
		label: "Pipeline FY27",
		hex: "#c05621",
		fg: "#fff6ed",
		short: "27"
	},
	pipeline_fy28: {
		id: "pipeline_fy28",
		label: "Pipeline FY28",
		hex: "#2f855a",
		fg: "#f1fff6",
		short: "28"
	},
	proposal_development: {
		id: "proposal_development",
		label: "Proposal Development",
		hex: "#7c4a28",
		fg: "#faf3eb",
		short: "DEV"
	},
	proposal_submitted: {
		id: "proposal_submitted",
		label: "Proposal Submitted",
		hex: "#1d6a8a",
		fg: "#eef8fb",
		short: "SUB"
	},
	won: {
		id: "won",
		label: "Won",
		hex: "#276749",
		fg: "#ecfdf3",
		short: "WON"
	},
	lost: {
		id: "lost",
		label: "Lost",
		hex: "#c53030",
		fg: "#fff5f5",
		short: "LST"
	},
	existing_client: {
		id: "existing_client",
		label: "Existing Client",
		hex: "#5c5a56",
		fg: "#f4f1ea",
		short: "EX"
	}
};
var STATUS_LIST = Object.values(STATUS_META);
var ACTIVE_PIPELINE_STATUSES = [
	"prospect_research",
	"pipeline_fy26",
	"pipeline_fy27",
	"pipeline_fy28",
	"proposal_development",
	"proposal_submitted"
];
var INDUSTRIES = [
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
	"SEZ / Campus"
];
var OWNERS = [
	"Ananya Sharma",
	"Rohan Mehta",
	"Priya Nair",
	"Vikram Singh",
	"Neha Kapoor",
	"Arjun Reddy",
	"Meera Iyer",
	"Kabir Khan"
];
var FIELD_ALIASES = {
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
	notes: "notes"
};
var RADIUS_OPTIONS = [
	5,
	10,
	25,
	50
];
var INDIA_CENTER = [21.5, 79];
var EARTH_KM = 6371;
function haversineKm(a, b) {
	const dLat = toRad(b.lat - a.lat);
	const dLng = toRad(b.lng - a.lng);
	const lat1 = toRad(a.lat);
	const lat2 = toRad(b.lat);
	const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
	return 2 * EARTH_KM * Math.asin(Math.min(1, Math.sqrt(h)));
}
function toRad(deg) {
	return deg * Math.PI / 180;
}
/** India urban/peri-urban circuity factor for straight-line → road km. */
function roadDistanceKm(straightKm) {
	return straightKm * 1.34;
}
/** Mixed urban speed ~28 km/h including congestion. */
function travelMinutes(roadKm) {
	return Math.round(roadKm / 28 * 60);
}
function kitchenMetrics(site, kitchen) {
	if (!kitchen) return {
		distanceKm: null,
		roadDistanceKm: null,
		travelMinutes: null
	};
	const straight = haversineKm(site, kitchen);
	const road = roadDistanceKm(straight);
	return {
		distanceKm: round1(straight),
		roadDistanceKm: round1(road),
		travelMinutes: travelMinutes(road)
	};
}
function applyKitchen(record, kitchens) {
	const kitchen = kitchens.find((k) => k.id === record.kitchenId);
	return {
		...record,
		...kitchenMetrics(record, kitchen)
	};
}
function nearestSites(origin, all, radiusKm, limit = 8) {
	return all.filter((r) => r.id !== origin.id && Number.isFinite(r.lat) && Number.isFinite(r.lng)).map((r) => ({
		id: r.id,
		clientName: r.clientName,
		siteName: r.siteName,
		city: r.city,
		status: r.status,
		km: haversineKm(origin, r)
	})).filter((h) => h.km <= radiusKm).sort((a, b) => a.km - b.km).slice(0, limit).map((h) => ({
		...h,
		km: round1(h.km)
	}));
}
function round1(n) {
	return Math.round(n * 10) / 10;
}
var PIPELINE_STATUS_IDS = [
	"universe",
	"prospect_research",
	"pipeline_fy26",
	"pipeline_fy27",
	"pipeline_fy28",
	"proposal_development",
	"proposal_submitted",
	"won",
	"lost",
	"existing_client"
];
var PIPELINE_FYS = [
	"FY26",
	"FY27",
	"FY28"
];
var BUSINESS_TYPES = [
	"B&I",
	"Healthcare",
	"Education",
	"Manufacturing",
	"Other"
];
var MAP_TYPES = [
	"Map 1",
	"Map 2",
	"Mix"
];
var ACCOUNT_TYPES = [
	"New Logo",
	"Existing Expansion",
	"Strategic",
	"Retention"
];
var PROPOSAL_STAGES = [
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
	""
];
var EMPTY_FILTERS = {
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
	distanceMax: null
};
var KITCHENS = [
	{
		id: "cpu_ggm",
		name: "Gurgaon CPU",
		city: "Gurugram",
		state: "Haryana",
		address: "Sector 18, Udyog Vihar, Gurugram",
		lat: 28.4802,
		lng: 77.0724
	},
	{
		id: "cpu_nod",
		name: "Noida CPU",
		city: "Noida",
		state: "Uttar Pradesh",
		address: "Sector 63, Noida",
		lat: 28.6278,
		lng: 77.3734
	},
	{
		id: "cpu_mum",
		name: "Mumbai BKC CPU",
		city: "Mumbai",
		state: "Maharashtra",
		address: "Bandra Kurla Complex, Mumbai",
		lat: 19.0662,
		lng: 72.8678
	},
	{
		id: "cpu_pun",
		name: "Pune Hinjewadi CPU",
		city: "Pune",
		state: "Maharashtra",
		address: "Hinjewadi Phase 2, Pune",
		lat: 18.5913,
		lng: 73.738
	},
	{
		id: "cpu_blr",
		name: "Bengaluru Whitefield CPU",
		city: "Bengaluru",
		state: "Karnataka",
		address: "EPIP Zone, Whitefield, Bengaluru",
		lat: 12.9698,
		lng: 77.7499
	},
	{
		id: "cpu_hyd",
		name: "Hyderabad HITEC CPU",
		city: "Hyderabad",
		state: "Telangana",
		address: "HITEC City, Madhapur, Hyderabad",
		lat: 17.4484,
		lng: 78.3816
	},
	{
		id: "cpu_che",
		name: "Chennai OMR CPU",
		city: "Chennai",
		state: "Tamil Nadu",
		address: "OMR, Perungudi, Chennai",
		lat: 12.9712,
		lng: 80.2465
	},
	{
		id: "cpu_kol",
		name: "Kolkata Salt Lake CPU",
		city: "Kolkata",
		state: "West Bengal",
		address: "Salt Lake Sector V, Kolkata",
		lat: 22.576,
		lng: 88.4338
	},
	{
		id: "cpu_amd",
		name: "Ahmedabad SG CPU",
		city: "Ahmedabad",
		state: "Gujarat",
		address: "SG Highway, Ahmedabad",
		lat: 23.0406,
		lng: 72.5284
	}
];
var SEED = [
	{
		n: 1,
		acc: "meridian",
		client: "Meridian Technologies",
		site: "DLF Cyber City",
		type: "Retention",
		industry: "IT / ITeS",
		city: "Gurugram",
		state: "Haryana",
		address: "Building 8, DLF Cyber City, Gurugram 122002",
		lat: 28.4949,
		lng: 77.0888,
		status: "existing_client",
		fy: "",
		p: 100,
		close: "",
		owner: "Ananya Sharma",
		stage: "Live",
		cr: 8.4,
		pax: 3200,
		biz: "B&I",
		map: "Mix",
		served: 3200,
		services: "Full-service cafeteria, executive dining, vending",
		cpu: "cpu_ggm",
		last: "QBR with facilities head",
		lastOn: "2026-08-22",
		next: "Menu cycle review",
		nextOn: "2026-09-18",
		notes: "Anchor NCR account. Strong NPS. Expansion interest at Noida."
	},
	{
		n: 2,
		acc: "meridian",
		client: "Meridian Technologies",
		site: "Noida Campus",
		type: "Existing Expansion",
		industry: "IT / ITeS",
		city: "Noida",
		state: "Uttar Pradesh",
		address: "Plot 3, Sector 62, Noida 201309",
		lat: 28.6271,
		lng: 77.3648,
		status: "proposal_submitted",
		fy: "FY27",
		p: 70,
		close: "2026-10-15",
		owner: "Ananya Sharma",
		stage: "Negotiation",
		cr: 4.1,
		pax: 1800,
		biz: "B&I",
		map: "Map 2",
		served: 0,
		services: "Multi-outlet F&B, night-shift meals",
		cpu: "cpu_nod",
		last: "Commercials sent",
		lastOn: "2026-08-28",
		next: "Procurement committee",
		nextOn: "2026-09-12",
		notes: "Expansion of DLF contract. Prefers CPU-served model."
	},
	{
		n: 3,
		acc: "helios",
		client: "Helios Manufacturing",
		site: "Manesar Plant",
		type: "New Logo",
		industry: "Automotive",
		city: "Manesar",
		state: "Haryana",
		address: "IMT Manesar, Sector 8, Gurugram 122051",
		lat: 28.3548,
		lng: 76.9376,
		status: "pipeline_fy27",
		fy: "FY27",
		p: 40,
		close: "2026-12-10",
		owner: "Vikram Singh",
		stage: "Needs Assessment",
		cr: 6.8,
		pax: 4200,
		biz: "Manufacturing",
		map: "Map 1",
		served: 0,
		services: "Industrial canteen, 3-shift meals, tea trolleys",
		cpu: "cpu_ggm",
		last: "Plant walkthrough",
		lastOn: "2026-07-14",
		next: "Labour contractor intro",
		nextOn: "2026-09-20",
		notes: "High pax, unionised canteen. On-site kitchen preferred."
	},
	{
		n: 4,
		acc: "apexcare",
		client: "Apex Care Hospital",
		site: "Gurugram Flagship",
		type: "New Logo",
		industry: "Healthcare Provider",
		city: "Gurugram",
		state: "Haryana",
		address: "Sector 51, Gurugram 122018",
		lat: 28.4372,
		lng: 77.0674,
		status: "proposal_development",
		fy: "FY27",
		p: 55,
		close: "2026-11-02",
		owner: "Ananya Sharma",
		stage: "Solution Design",
		cr: 5.2,
		pax: 1100,
		biz: "Healthcare",
		map: "Mix",
		served: 0,
		services: "Patient meals, staff cafeteria, diet kitchen",
		cpu: "cpu_ggm",
		last: "Dietetics workshop",
		lastOn: "2026-09-01",
		next: "NABH compliance pack",
		nextOn: "2026-09-11",
		notes: "Requires FSSAI + NABH aligned patient meal SOPs."
	},
	{
		n: 5,
		acc: "northcrest",
		client: "Northcrest University",
		site: "Sohna Campus",
		type: "New Logo",
		industry: "Higher Education",
		city: "Sohna",
		state: "Haryana",
		address: "Sohna Road, Gurugram 122103",
		lat: 28.2471,
		lng: 77.0659,
		status: "pipeline_fy26",
		fy: "FY26",
		p: 25,
		close: "2026-09-30",
		owner: "Vikram Singh",
		stage: "Commercials",
		cr: 3.6,
		pax: 2400,
		biz: "Education",
		map: "Map 1",
		served: 0,
		services: "Hostel mess, faculty dining, kiosks",
		cpu: "cpu_ggm",
		last: "Price revision ask",
		lastOn: "2026-05-18",
		next: "Re-engage chancellor office",
		nextOn: "2026-09-16",
		notes: "FY26 slippage. Quiet since May. Mess committee political."
	},
	{
		n: 6,
		acc: "vantage",
		client: "Vantage Auto Components",
		site: "Bawal Works",
		type: "New Logo",
		industry: "Automotive",
		city: "Bawal",
		state: "Haryana",
		address: "Bawal Industrial Area, Rewari 123501",
		lat: 28.1184,
		lng: 76.5862,
		status: "prospect_research",
		fy: "FY27",
		p: 15,
		close: "2027-02-28",
		owner: "Vikram Singh",
		stage: "Discovery",
		cr: 2.4,
		pax: 1600,
		biz: "Manufacturing",
		map: "Map 2",
		served: 0,
		services: "Industrial canteen",
		cpu: "cpu_ggm",
		last: "Desk research + GST lookup",
		lastOn: "2026-08-04",
		next: "Cold outreach to GM Admin",
		nextOn: "2026-09-09",
		notes: "Far from Gurgaon CPU — road time is the feasibility question."
	},
	{
		n: 7,
		acc: "lumen",
		client: "Lumen Bank",
		site: "Connaught Place HQ",
		type: "Retention",
		industry: "BFSI",
		city: "New Delhi",
		state: "Delhi",
		address: "Barakhamba Road, Connaught Place, New Delhi 110001",
		lat: 28.6304,
		lng: 77.2245,
		status: "existing_client",
		fy: "",
		p: 100,
		close: "",
		owner: "Ananya Sharma",
		stage: "Live",
		cr: 2.8,
		pax: 650,
		biz: "B&I",
		map: "Map 2",
		served: 650,
		services: "Executive dining, pantry, cafe",
		cpu: "cpu_ggm",
		last: "Contract year-3 review",
		lastOn: "2026-08-12",
		next: "SLA dashboard",
		nextOn: "2026-09-25",
		notes: "Prestige site. CPU-served from Gurgaon works well."
	},
	{
		n: 8,
		acc: "lumen",
		client: "Lumen Bank",
		site: "Gurugram Operations Centre",
		type: "Existing Expansion",
		industry: "BFSI",
		city: "Gurugram",
		state: "Haryana",
		address: "Golf Course Extension Road, Gurugram 122102",
		lat: 28.4086,
		lng: 77.0701,
		status: "pipeline_fy28",
		fy: "FY28",
		p: 35,
		close: "2027-06-30",
		owner: "Ananya Sharma",
		stage: "Discovery",
		cr: 3.1,
		pax: 1400,
		biz: "B&I",
		map: "Mix",
		served: 0,
		services: "24x7 cafeteria, pantry network",
		cpu: "cpu_ggm",
		last: "Facilities intro",
		lastOn: "2026-09-02",
		next: "Occupancy forecast",
		nextOn: "2026-10-01",
		notes: "New ops centre opening FY28. Early relationship seeding."
	},
	{
		n: 9,
		acc: "silverline",
		client: "Silverline IT Park",
		site: "Noida Tower A-C",
		type: "Strategic",
		industry: "SEZ / Campus",
		city: "Noida",
		state: "Uttar Pradesh",
		address: "Sector 135, Noida 201304",
		lat: 28.5022,
		lng: 77.4108,
		status: "proposal_submitted",
		fy: "FY27",
		p: 65,
		close: "2026-09-28",
		owner: "Ananya Sharma",
		stage: "Submitted",
		cr: 11.5,
		pax: 5600,
		biz: "B&I",
		map: "Mix",
		served: 0,
		services: "Campus F&B, food court, dark kitchen",
		cpu: "cpu_nod",
		last: "Proposal submitted to JLL",
		lastOn: "2026-08-19",
		next: "Developer board",
		nextOn: "2026-09-14",
		notes: "Multi-tenant IT park. Highest-value NCR bid this quarter."
	},
	{
		n: 10,
		acc: "cascade",
		client: "Cascade Pharma",
		site: "Bhiwadi Formulation",
		type: "New Logo",
		industry: "Pharma",
		city: "Bhiwadi",
		state: "Rajasthan",
		address: "RIICO Industrial Area, Bhiwadi 301019",
		lat: 28.2089,
		lng: 76.8604,
		status: "pipeline_fy27",
		fy: "FY27",
		p: 30,
		close: "2027-01-20",
		owner: "Vikram Singh",
		stage: "Needs Assessment",
		cr: 3.9,
		pax: 2100,
		biz: "Manufacturing",
		map: "Map 1",
		served: 0,
		services: "GMP canteen, restricted-diet lines",
		cpu: "cpu_ggm",
		last: "EHS questionnaire",
		lastOn: "2026-06-21",
		next: "Plant HR reconnect",
		nextOn: "2026-09-22",
		notes: "Stale since June. GMP hygiene bar is high."
	},
	{
		n: 11,
		acc: "harbor",
		client: "Harbor Schools Group",
		site: "Greater Noida Campus",
		type: "New Logo",
		industry: "K-12 Education",
		city: "Greater Noida",
		state: "Uttar Pradesh",
		address: "Knowledge Park II, Greater Noida 201310",
		lat: 28.4744,
		lng: 77.503,
		status: "universe",
		fy: "FY28",
		p: 10,
		close: "2027-08-01",
		owner: "Ananya Sharma",
		stage: "",
		cr: 1.6,
		pax: 1800,
		biz: "Education",
		map: "Map 1",
		served: 0,
		services: "School meals, staff cafe",
		cpu: "cpu_nod",
		last: "Added from universe scrape",
		lastOn: "2026-07-02",
		next: "Map parent trust",
		nextOn: "2026-10-05",
		notes: "Universe record. Midday meal quality is the entry point."
	},
	{
		n: 12,
		acc: "fortwell",
		client: "Fortwell Hospital",
		site: "South Delhi",
		type: "New Logo",
		industry: "Healthcare Provider",
		city: "New Delhi",
		state: "Delhi",
		address: "Saket, New Delhi 110017",
		lat: 28.5284,
		lng: 77.2192,
		status: "lost",
		fy: "FY26",
		p: 0,
		close: "2026-04-12",
		owner: "Ananya Sharma",
		stage: "Closed Lost",
		cr: 4.4,
		pax: 900,
		biz: "Healthcare",
		map: "Mix",
		served: 0,
		services: "Patient meals, staff cafeteria",
		cpu: "cpu_ggm",
		last: "Lost to incumbent on price",
		lastOn: "2026-04-12",
		next: "12-month rebid watch",
		nextOn: "2027-01-15",
		notes: "Lost on price. Close to Lumen CP and Apex Care — cluster play later."
	},
	{
		n: 13,
		acc: "keystone",
		client: "Keystone SEZ",
		site: "Gurugram Campus",
		type: "Strategic",
		industry: "SEZ / Campus",
		city: "Gurugram",
		state: "Haryana",
		address: "Sector 48, Gurugram 122018",
		lat: 28.4178,
		lng: 77.0366,
		status: "won",
		fy: "FY26",
		p: 100,
		close: "2026-03-20",
		owner: "Ananya Sharma",
		stage: "Closed Won",
		cr: 9.7,
		pax: 4100,
		biz: "B&I",
		map: "Mix",
		served: 0,
		services: "Food court, CPU commissary, cafe brands",
		cpu: "cpu_ggm",
		last: "Mobilisation kickoff",
		lastOn: "2026-08-30",
		next: "Go-live 1 Oct",
		nextOn: "2026-10-01",
		notes: "Won FY26. Mobilising. Nearby prospects can ride this CPU density."
	},
	{
		n: 14,
		acc: "riviera",
		client: "Riviera Foods HQ",
		site: "Okhla Office",
		type: "New Logo",
		industry: "FMCG",
		city: "New Delhi",
		state: "Delhi",
		address: "Okhla Phase III, New Delhi 110020",
		lat: 28.5493,
		lng: 77.2732,
		status: "prospect_research",
		fy: "FY27",
		p: 20,
		close: "2026-12-18",
		owner: "Ananya Sharma",
		stage: "Discovery",
		cr: 1.1,
		pax: 280,
		biz: "B&I",
		map: "Map 2",
		served: 0,
		services: "HQ cafe, pantry",
		cpu: "cpu_ggm",
		last: "LinkedIn connect with CHRO",
		lastOn: "2026-08-26",
		next: "Site visit request",
		nextOn: "2026-09-15",
		notes: "Small HQ pax but brand-visible FMCG logo."
	},
	{
		n: 15,
		acc: "horizon",
		client: "Horizon Capital",
		site: "BKC Tower",
		type: "Retention",
		industry: "BFSI",
		city: "Mumbai",
		state: "Maharashtra",
		address: "G Block, Bandra Kurla Complex, Mumbai 400051",
		lat: 19.0611,
		lng: 72.8638,
		status: "existing_client",
		fy: "",
		p: 100,
		close: "",
		owner: "Rohan Mehta",
		stage: "Live",
		cr: 3.4,
		pax: 720,
		biz: "B&I",
		map: "Map 2",
		served: 720,
		services: "Executive dining, trading-floor pantry",
		cpu: "cpu_mum",
		last: "Monsoon menu refresh",
		lastOn: "2026-08-08",
		next: "Diwali service plan",
		nextOn: "2026-10-08",
		notes: "Flagship west-side client. CPU is 800m away."
	},
	{
		n: 16,
		acc: "deccan",
		client: "Deccan Steel",
		site: "Navi Mumbai Mill",
		type: "New Logo",
		industry: "Engineering",
		city: "Navi Mumbai",
		state: "Maharashtra",
		address: "TTC Industrial Area, Navi Mumbai 400710",
		lat: 19.1056,
		lng: 73.0202,
		status: "pipeline_fy26",
		fy: "FY26",
		p: 45,
		close: "2026-09-22",
		owner: "Rohan Mehta",
		stage: "Commercials",
		cr: 7.2,
		pax: 3800,
		biz: "Manufacturing",
		map: "Map 1",
		served: 0,
		services: "Industrial canteen, 3-shift, PPE-zone meals",
		cpu: "cpu_mum",
		last: "BOQ submitted",
		lastOn: "2026-08-16",
		next: "CFO meeting",
		nextOn: "2026-09-08",
		notes: "Closure this month. High pax, on-site kitchen."
	},
	{
		n: 17,
		acc: "sagar",
		client: "Sagar Hospitals",
		site: "Andheri West",
		type: "New Logo",
		industry: "Healthcare Provider",
		city: "Mumbai",
		state: "Maharashtra",
		address: "Veera Desai Road, Andheri West, Mumbai 400053",
		lat: 19.1364,
		lng: 72.8296,
		status: "proposal_development",
		fy: "FY27",
		p: 50,
		close: "2026-11-18",
		owner: "Rohan Mehta",
		stage: "Solution Design",
		cr: 4.8,
		pax: 980,
		biz: "Healthcare",
		map: "Mix",
		served: 0,
		services: "Patient meals, staff cafeteria, visitor cafe",
		cpu: "cpu_mum",
		last: "Kitchen layout draft",
		lastOn: "2026-09-03",
		next: "JCI gap assessment",
		nextOn: "2026-09-19",
		notes: "Wants mix of on-site diet kitchen + CPU bulk."
	},
	{
		n: 18,
		acc: "peninsula",
		client: "Peninsula Tech",
		site: "Powai Campus",
		type: "New Logo",
		industry: "IT / ITeS",
		city: "Mumbai",
		state: "Maharashtra",
		address: "Hiranandani, Powai, Mumbai 400076",
		lat: 19.1197,
		lng: 72.906,
		status: "pipeline_fy27",
		fy: "FY27",
		p: 35,
		close: "2027-01-31",
		owner: "Rohan Mehta",
		stage: "Needs Assessment",
		cr: 5.6,
		pax: 2600,
		biz: "B&I",
		map: "Mix",
		served: 0,
		services: "Multi-outlet, midnight meals, cafe",
		cpu: "cpu_mum",
		last: "Palatability tasting",
		lastOn: "2026-07-29",
		next: "Cafeteria utilisation study",
		nextOn: "2026-09-24",
		notes: "Incumbent in place until Mar 2027."
	},
	{
		n: 19,
		acc: "coral",
		client: "Coral University",
		site: "Kalyan Campus",
		type: "New Logo",
		industry: "Higher Education",
		city: "Kalyan",
		state: "Maharashtra",
		address: "Kalyan-Shilphata Road, Kalyan 421204",
		lat: 19.235,
		lng: 73.1298,
		status: "universe",
		fy: "FY28",
		p: 10,
		close: "",
		owner: "Rohan Mehta",
		stage: "",
		cr: 2.2,
		pax: 3100,
		biz: "Education",
		map: "Map 1",
		served: 0,
		services: "Hostel mess, canteen",
		cpu: "cpu_mum",
		last: "Universe add from AISHE",
		lastOn: "2026-06-11",
		next: "Registrar outreach",
		nextOn: "2026-10-12",
		notes: "Distance from BKC CPU is the open question."
	},
	{
		n: 20,
		acc: "marina_r",
		client: "Marina Retail HQ",
		site: "Lower Parel",
		type: "New Logo",
		industry: "Retail",
		city: "Mumbai",
		state: "Maharashtra",
		address: "Kamala Mills, Lower Parel, Mumbai 400013",
		lat: 19.0023,
		lng: 72.8298,
		status: "won",
		fy: "FY26",
		p: 100,
		close: "2026-02-14",
		owner: "Rohan Mehta",
		stage: "Closed Won",
		cr: 1.9,
		pax: 420,
		biz: "B&I",
		map: "Map 2",
		served: 420,
		services: "HQ cafe, pantry",
		cpu: "cpu_mum",
		last: "Live since April",
		lastOn: "2026-08-21",
		next: "Q2 NPS",
		nextOn: "2026-10-05",
		notes: "Won logo. Useful as a west-line reference."
	},
	{
		n: 21,
		acc: "indus",
		client: "Indus Courier Hub",
		site: "Bhiwandi Sortation",
		type: "New Logo",
		industry: "Logistics",
		city: "Bhiwandi",
		state: "Maharashtra",
		address: "Bhiwandi Industrial, Thane 421302",
		lat: 19.2967,
		lng: 73.0631,
		status: "pipeline_fy28",
		fy: "FY28",
		p: 20,
		close: "2027-07-15",
		owner: "Kabir Khan",
		stage: "Discovery",
		cr: 2.7,
		pax: 1900,
		biz: "Manufacturing",
		map: "Map 1",
		served: 0,
		services: "24x7 canteen, tea service",
		cpu: "cpu_mum",
		last: "Ops director call",
		lastOn: "2026-08-06",
		next: "Night-shift sample",
		nextOn: "2026-09-29",
		notes: "Odd hours. Hub growing with two more sheds FY28."
	},
	{
		n: 22,
		acc: "pearl",
		client: "Pearl Pharma",
		site: "Thane R&D",
		type: "New Logo",
		industry: "Pharma",
		city: "Thane",
		state: "Maharashtra",
		address: "Wagle Estate, Thane 400604",
		lat: 19.1941,
		lng: 72.9588,
		status: "lost",
		fy: "FY26",
		p: 0,
		close: "2026-05-09",
		owner: "Rohan Mehta",
		stage: "Closed Lost",
		cr: 2.1,
		pax: 540,
		biz: "B&I",
		map: "Map 2",
		served: 0,
		services: "R&D cafe, restricted diets",
		cpu: "cpu_mum",
		last: "Lost — global GPO mandate",
		lastOn: "2026-05-09",
		next: "Watch 2027 GPO cycle",
		nextOn: "2027-02-01",
		notes: "Lost to global GPO. Geographically next to Peninsula and Sagar."
	},
	{
		n: 23,
		acc: "summit",
		client: "Summit Motors",
		site: "Chakan Plant",
		type: "Retention",
		industry: "Automotive",
		city: "Pune",
		state: "Maharashtra",
		address: "Chakan MIDC Phase 2, Pune 410501",
		lat: 18.7604,
		lng: 73.8372,
		status: "existing_client",
		fy: "",
		p: 100,
		close: "",
		owner: "Neha Kapoor",
		stage: "Live",
		cr: 10.2,
		pax: 6400,
		biz: "Manufacturing",
		map: "Map 1",
		served: 6400,
		services: "Industrial canteen, 3-shift, guest house",
		cpu: "cpu_pun",
		last: "Safety audit closeout",
		lastOn: "2026-08-18",
		next: "Wage revision impact",
		nextOn: "2026-09-21",
		notes: "Largest live manufacturing account. Reference for auto cluster."
	},
	{
		n: 24,
		acc: "summit",
		client: "Summit Motors",
		site: "Hinjewadi Tech Centre",
		type: "Existing Expansion",
		industry: "Automotive",
		city: "Pune",
		state: "Maharashtra",
		address: "Hinjewadi Phase 1, Pune 411057",
		lat: 18.5971,
		lng: 73.7183,
		status: "pipeline_fy27",
		fy: "FY27",
		p: 60,
		close: "2026-11-30",
		owner: "Neha Kapoor",
		stage: "Commercials",
		cr: 2.9,
		pax: 1100,
		biz: "B&I",
		map: "Mix",
		served: 0,
		services: "Campus cafe, EV lab pantry",
		cpu: "cpu_pun",
		last: "Draft MSA aligned to Chakan",
		lastOn: "2026-09-01",
		next: "Plant HR alignment",
		nextOn: "2026-09-17",
		notes: "Expansion of Chakan relationship. CPU next door."
	},
	{
		n: 25,
		acc: "orchid",
		client: "Orchid IT",
		site: "Hinjewadi Phase 3",
		type: "New Logo",
		industry: "IT / ITeS",
		city: "Pune",
		state: "Maharashtra",
		address: "Hinjewadi Phase 3, Pune 411057",
		lat: 18.5788,
		lng: 73.7375,
		status: "proposal_submitted",
		fy: "FY27",
		p: 55,
		close: "2026-10-08",
		owner: "Neha Kapoor",
		stage: "Submitted",
		cr: 4.7,
		pax: 2200,
		biz: "B&I",
		map: "Map 2",
		served: 0,
		services: "Food court, night meals",
		cpu: "cpu_pun",
		last: "Submitted to Jones Lang",
		lastOn: "2026-08-25",
		next: "Tech eval",
		nextOn: "2026-09-13",
		notes: "Clustered with Summit Hinjewadi — shared CPU economics."
	},
	{
		n: 26,
		acc: "hillcrest",
		client: "Hillcrest College",
		site: "Kothrud",
		type: "New Logo",
		industry: "Higher Education",
		city: "Pune",
		state: "Maharashtra",
		address: "Karve Road, Kothrud, Pune 411038",
		lat: 18.5074,
		lng: 73.8077,
		status: "pipeline_fy26",
		fy: "FY26",
		p: 30,
		close: "2026-09-18",
		owner: "Neha Kapoor",
		stage: "Negotiation",
		cr: 1.8,
		pax: 1400,
		biz: "Education",
		map: "Map 1",
		served: 0,
		services: "Student mess, faculty dining",
		cpu: "cpu_pun",
		last: "Fee-hike objection",
		lastOn: "2026-05-27",
		next: "Revised commercial",
		nextOn: "2026-09-10",
		notes: "Stale FY26 deal. Student committee blocking price."
	},
	{
		n: 27,
		acc: "granite",
		client: "Granite Healthcare",
		site: "Baner Hospital",
		type: "New Logo",
		industry: "Healthcare Provider",
		city: "Pune",
		state: "Maharashtra",
		address: "Baner-Pashan Link Road, Pune 411045",
		lat: 18.559,
		lng: 73.7866,
		status: "prospect_research",
		fy: "FY27",
		p: 20,
		close: "2027-03-01",
		owner: "Neha Kapoor",
		stage: "Discovery",
		cr: 3.3,
		pax: 760,
		biz: "Healthcare",
		map: "Mix",
		served: 0,
		services: "Patient meals, staff cafe",
		cpu: "cpu_pun",
		last: "Website + bed-count research",
		lastOn: "2026-08-14",
		next: "CMO intro via Apex Care",
		nextOn: "2026-09-23",
		notes: "Can reference Apex Care Gurugram case."
	},
	{
		n: 28,
		acc: "lotus",
		client: "Lotus Components",
		site: "Talegaon",
		type: "New Logo",
		industry: "Engineering",
		city: "Talegaon",
		state: "Maharashtra",
		address: "Talegaon MIDC, Pune 410507",
		lat: 18.7356,
		lng: 73.6754,
		status: "universe",
		fy: "FY28",
		p: 5,
		close: "",
		owner: "Neha Kapoor",
		stage: "",
		cr: 2,
		pax: 1250,
		biz: "Manufacturing",
		map: "Map 1",
		served: 0,
		services: "Industrial canteen",
		cpu: "cpu_pun",
		last: "Added from MIDC list",
		lastOn: "2026-07-19",
		next: "Qualify pax",
		nextOn: "2026-10-20",
		notes: "Near Summit Chakan — cluster if we win density."
	},
	{
		n: 29,
		acc: "cinder",
		client: "Cinder Tech",
		site: "Whitefield Campus",
		type: "Retention",
		industry: "IT / ITeS",
		city: "Bengaluru",
		state: "Karnataka",
		address: "ITPL Main Road, Whitefield, Bengaluru 560066",
		lat: 12.9851,
		lng: 77.7362,
		status: "existing_client",
		fy: "",
		p: 100,
		close: "",
		owner: "Priya Nair",
		stage: "Live",
		cr: 12.4,
		pax: 5100,
		biz: "B&I",
		map: "Mix",
		served: 5100,
		services: "Campus F&B, CPU commissary, 5 outlets",
		cpu: "cpu_blr",
		last: "Outlet 5 renovation",
		lastOn: "2026-08-29",
		next: "Festival staffing",
		nextOn: "2026-10-02",
		notes: "Anchor Bengaluru account. Whitefield CPU built around this site."
	},
	{
		n: 30,
		acc: "cinder",
		client: "Cinder Tech",
		site: "Electronic City",
		type: "Retention",
		industry: "IT / ITeS",
		city: "Bengaluru",
		state: "Karnataka",
		address: "Electronic City Phase 1, Bengaluru 560100",
		lat: 12.8452,
		lng: 77.6602,
		status: "existing_client",
		fy: "",
		p: 100,
		close: "",
		owner: "Priya Nair",
		stage: "Live",
		cr: 6.1,
		pax: 2700,
		biz: "B&I",
		map: "Map 2",
		served: 2700,
		services: "Cafeteria, cafe, midnight meals",
		cpu: "cpu_blr",
		last: "Night-shift complaint close",
		lastOn: "2026-08-11",
		next: "EC Phase 2 bid",
		nextOn: "2026-09-26",
		notes: "CPU travel from Whitefield is tight at peak hours."
	},
	{
		n: 31,
		acc: "redwood",
		client: "Redwood Hospitals",
		site: "Hebbal",
		type: "New Logo",
		industry: "Healthcare Provider",
		city: "Bengaluru",
		state: "Karnataka",
		address: "Hebbal, Bengaluru 560024",
		lat: 13.0358,
		lng: 77.597,
		status: "proposal_development",
		fy: "FY27",
		p: 50,
		close: "2026-12-05",
		owner: "Priya Nair",
		stage: "Solution Design",
		cr: 5.5,
		pax: 1250,
		biz: "Healthcare",
		map: "Mix",
		served: 0,
		services: "Patient meals, staff cafeteria, visitor cafe",
		cpu: "cpu_blr",
		last: "Diet kitchen spec",
		lastOn: "2026-09-04",
		next: "NABH evidence pack",
		nextOn: "2026-09-18",
		notes: "Wants Siteline as second vendor after a failed incumbent."
	},
	{
		n: 32,
		acc: "kanara",
		client: "Kanara Manufacturing",
		site: "Peenya Works",
		type: "New Logo",
		industry: "Engineering",
		city: "Bengaluru",
		state: "Karnataka",
		address: "Peenya Industrial Area, Bengaluru 560058",
		lat: 13.0286,
		lng: 77.5199,
		status: "pipeline_fy27",
		fy: "FY27",
		p: 40,
		close: "2027-02-12",
		owner: "Priya Nair",
		stage: "Needs Assessment",
		cr: 4.2,
		pax: 2900,
		biz: "Manufacturing",
		map: "Map 1",
		served: 0,
		services: "Industrial canteen, 2-shift",
		cpu: "cpu_blr",
		last: "Union meeting observed",
		lastOn: "2026-07-08",
		next: "Re-open with new HR head",
		nextOn: "2026-09-30",
		notes: "Stale. Union prefers in-house cook staff."
	},
	{
		n: 33,
		acc: "blueoak",
		client: "Blueoak University",
		site: "Yelahanka",
		type: "New Logo",
		industry: "Higher Education",
		city: "Bengaluru",
		state: "Karnataka",
		address: "Yelahanka, Bengaluru 560064",
		lat: 13.1155,
		lng: 77.606,
		status: "pipeline_fy26",
		fy: "FY26",
		p: 20,
		close: "2026-10-30",
		owner: "Priya Nair",
		stage: "Commercials",
		cr: 3,
		pax: 2200,
		biz: "Education",
		map: "Map 1",
		served: 0,
		services: "Hostel mess, kiosks",
		cpu: "cpu_blr",
		last: "Mess tender extended",
		lastOn: "2026-06-03",
		next: "Tender addendum",
		nextOn: "2026-09-27",
		notes: "FY26 leftover. Tender slipped twice."
	},
	{
		n: 34,
		acc: "sparrow",
		client: "Sparrow Fintech",
		site: "Koramangala",
		type: "New Logo",
		industry: "BFSI",
		city: "Bengaluru",
		state: "Karnataka",
		address: "Koramangala 5th Block, Bengaluru 560095",
		lat: 12.9352,
		lng: 77.6245,
		status: "won",
		fy: "FY27",
		p: 100,
		close: "2026-07-22",
		owner: "Priya Nair",
		stage: "Closed Won",
		cr: 1.4,
		pax: 380,
		biz: "B&I",
		map: "Map 2",
		served: 380,
		services: "Cafe, pantry",
		cpu: "cpu_blr",
		last: "Go-live complete",
		lastOn: "2026-08-20",
		next: "30-day review",
		nextOn: "2026-09-19",
		notes: "Small won logo. Useful downtown reference."
	},
	{
		n: 35,
		acc: "nimbus",
		client: "Nimbus BPO",
		site: "Whitefield SEZ",
		type: "New Logo",
		industry: "IT / ITeS",
		city: "Bengaluru",
		state: "Karnataka",
		address: "Graphite India Road, Whitefield, Bengaluru 560048",
		lat: 12.9734,
		lng: 77.7278,
		status: "lost",
		fy: "FY26",
		p: 0,
		close: "2026-06-18",
		owner: "Priya Nair",
		stage: "Closed Lost",
		cr: 3.8,
		pax: 1900,
		biz: "B&I",
		map: "Map 2",
		served: 0,
		services: "24x7 cafeteria",
		cpu: "cpu_blr",
		last: "Lost on transition risk",
		lastOn: "2026-06-18",
		next: "Rebid FY28",
		nextOn: "2027-04-01",
		notes: "Lost next door to Cinder Whitefield. Classic near-won miss."
	},
	{
		n: 36,
		acc: "cedar",
		client: "Cedar Pharma",
		site: "Bommasandra",
		type: "New Logo",
		industry: "Pharma",
		city: "Bengaluru",
		state: "Karnataka",
		address: "Bommasandra Jigani Link, Bengaluru 560099",
		lat: 12.7995,
		lng: 77.6844,
		status: "prospect_research",
		fy: "FY27",
		p: 15,
		close: "2027-03-15",
		owner: "Priya Nair",
		stage: "Discovery",
		cr: 2.6,
		pax: 870,
		biz: "Manufacturing",
		map: "Map 1",
		served: 0,
		services: "GMP canteen",
		cpu: "cpu_blr",
		last: "EHS policy review",
		lastOn: "2026-08-07",
		next: "Plant director mail",
		nextOn: "2026-09-21",
		notes: "South of Electronic City live site."
	},
	{
		n: 37,
		acc: "deccanit",
		client: "Deccan IT",
		site: "HITEC City",
		type: "Retention",
		industry: "IT / ITeS",
		city: "Hyderabad",
		state: "Telangana",
		address: "Cyber Towers, HITEC City, Hyderabad 500081",
		lat: 17.4504,
		lng: 78.3808,
		status: "existing_client",
		fy: "",
		p: 100,
		close: "",
		owner: "Arjun Reddy",
		stage: "Live",
		cr: 7.6,
		pax: 3400,
		biz: "B&I",
		map: "Mix",
		served: 3400,
		services: "Campus F&B, CPU, 3 outlets",
		cpu: "cpu_hyd",
		last: "Ramzan menu closeout",
		lastOn: "2026-08-05",
		next: "Bathukamma specials",
		nextOn: "2026-09-28",
		notes: "CPU sits inside this campus. Density engine for Hyderabad."
	},
	{
		n: 38,
		acc: "charminar",
		client: "Charminar Hospitals",
		site: "Banjara Hills",
		type: "New Logo",
		industry: "Healthcare Provider",
		city: "Hyderabad",
		state: "Telangana",
		address: "Road No. 12, Banjara Hills, Hyderabad 500034",
		lat: 17.4126,
		lng: 78.444,
		status: "pipeline_fy27",
		fy: "FY27",
		p: 40,
		close: "2026-12-22",
		owner: "Arjun Reddy",
		stage: "Needs Assessment",
		cr: 4,
		pax: 820,
		biz: "Healthcare",
		map: "Mix",
		served: 0,
		services: "Patient meals, staff cafeteria",
		cpu: "cpu_hyd",
		last: "Kitchen audit",
		lastOn: "2026-08-27",
		next: "CMO tasting",
		nextOn: "2026-09-16",
		notes: "Premium hospital. Brand-sensitive menus."
	},
	{
		n: 39,
		acc: "saffron",
		client: "Saffron Manufacturing",
		site: "Genome Valley",
		type: "New Logo",
		industry: "Pharma",
		city: "Hyderabad",
		state: "Telangana",
		address: "Genome Valley, Shameerpet, Hyderabad 500078",
		lat: 17.5918,
		lng: 78.5802,
		status: "proposal_submitted",
		fy: "FY27",
		p: 60,
		close: "2026-10-20",
		owner: "Arjun Reddy",
		stage: "Submitted",
		cr: 5.9,
		pax: 2400,
		biz: "Manufacturing",
		map: "Map 1",
		served: 0,
		services: "GMP canteen, 2-shift",
		cpu: "cpu_hyd",
		last: "Proposal submitted",
		lastOn: "2026-08-31",
		next: "Technical clarification",
		nextOn: "2026-09-15",
		notes: "Far from HITEC CPU — on-site kitchen is the model."
	},
	{
		n: 40,
		acc: "nilgiri",
		client: "Nilgiri College",
		site: "Gachibowli",
		type: "New Logo",
		industry: "Higher Education",
		city: "Hyderabad",
		state: "Telangana",
		address: "Gachibowli, Hyderabad 500032",
		lat: 17.4401,
		lng: 78.3489,
		status: "universe",
		fy: "FY28",
		p: 10,
		close: "",
		owner: "Arjun Reddy",
		stage: "",
		cr: 1.7,
		pax: 1600,
		biz: "Education",
		map: "Map 1",
		served: 0,
		services: "Student mess",
		cpu: "cpu_hyd",
		last: "Universe add",
		lastOn: "2026-07-22",
		next: "Dean intro",
		nextOn: "2026-10-14",
		notes: "Walkable to Deccan IT campus — cluster with existing."
	},
	{
		n: 41,
		acc: "quartz",
		client: "Quartz Bank",
		site: "Financial District",
		type: "New Logo",
		industry: "BFSI",
		city: "Hyderabad",
		state: "Telangana",
		address: "Nanakramguda, Hyderabad 500032",
		lat: 17.4213,
		lng: 78.3446,
		status: "pipeline_fy26",
		fy: "FY26",
		p: 35,
		close: "2026-09-25",
		owner: "Arjun Reddy",
		stage: "Negotiation",
		cr: 3.5,
		pax: 960,
		biz: "B&I",
		map: "Map 2",
		served: 0,
		services: "HQ cafe, pantry",
		cpu: "cpu_hyd",
		last: "Legal redlines",
		lastOn: "2026-09-02",
		next: "MSA close",
		nextOn: "2026-09-11",
		notes: "Closing this month. CPU-served from HITEC."
	},
	{
		n: 42,
		acc: "coromandel",
		client: "Coromandel Tech",
		site: "OMR Campus",
		type: "Retention",
		industry: "IT / ITeS",
		city: "Chennai",
		state: "Tamil Nadu",
		address: "OMR, Thoraipakkam, Chennai 600097",
		lat: 12.9492,
		lng: 80.2411,
		status: "existing_client",
		fy: "",
		p: 100,
		close: "",
		owner: "Meera Iyer",
		stage: "Live",
		cr: 6.8,
		pax: 2900,
		biz: "B&I",
		map: "Mix",
		served: 2900,
		services: "Campus F&B, CPU",
		cpu: "cpu_che",
		last: "Pongal planning",
		lastOn: "2026-08-24",
		next: "Navaratri menu",
		nextOn: "2026-09-29",
		notes: "Anchor Chennai account. OMR CPU on campus edge."
	},
	{
		n: 43,
		acc: "marina_h",
		client: "Marina Hospitals",
		site: "T. Nagar",
		type: "New Logo",
		industry: "Healthcare Provider",
		city: "Chennai",
		state: "Tamil Nadu",
		address: "T. Nagar, Chennai 600017",
		lat: 13.0418,
		lng: 80.2337,
		status: "pipeline_fy28",
		fy: "FY28",
		p: 25,
		close: "2027-05-30",
		owner: "Meera Iyer",
		stage: "Discovery",
		cr: 3.7,
		pax: 700,
		biz: "Healthcare",
		map: "Mix",
		served: 0,
		services: "Patient meals, staff cafe",
		cpu: "cpu_che",
		last: "Intro via Coromandel CHRO",
		lastOn: "2026-08-13",
		next: "Kitchen tour",
		nextOn: "2026-09-22",
		notes: "Early FY28 seed. City-centre vs OMR CPU time."
	},
	{
		n: 44,
		acc: "pallava",
		client: "Pallava Auto",
		site: "Sriperumbudur",
		type: "New Logo",
		industry: "Automotive",
		city: "Sriperumbudur",
		state: "Tamil Nadu",
		address: "SIPCOT, Sriperumbudur 602105",
		lat: 12.9676,
		lng: 79.9489,
		status: "proposal_development",
		fy: "FY27",
		p: 45,
		close: "2026-11-28",
		owner: "Meera Iyer",
		stage: "Solution Design",
		cr: 8.1,
		pax: 4700,
		biz: "Manufacturing",
		map: "Map 1",
		served: 0,
		services: "Industrial canteen, 3-shift",
		cpu: "cpu_che",
		last: "Layout + manpower model",
		lastOn: "2026-09-03",
		next: "Japanese principal call",
		nextOn: "2026-09-17",
		notes: "High pax auto. On-site kitchen; CPU too far for bulk hot meals."
	},
	{
		n: 45,
		acc: "bayleaf",
		client: "Bayleaf University",
		site: "Tambaram",
		type: "New Logo",
		industry: "Higher Education",
		city: "Chennai",
		state: "Tamil Nadu",
		address: "Tambaram, Chennai 600045",
		lat: 12.9249,
		lng: 80.1,
		status: "prospect_research",
		fy: "FY27",
		p: 15,
		close: "2027-01-10",
		owner: "Meera Iyer",
		stage: "Discovery",
		cr: 2.3,
		pax: 2100,
		biz: "Education",
		map: "Map 1",
		served: 0,
		services: "Hostel mess",
		cpu: "cpu_che",
		last: "Prospect research note",
		lastOn: "2026-07-30",
		next: "Registrar letter",
		nextOn: "2026-09-25",
		notes: "Mess currently in-house. Quality complaints on social."
	},
	{
		n: 46,
		acc: "sabarmati",
		client: "Sabarmati Textiles",
		site: "Narol Mill",
		type: "New Logo",
		industry: "FMCG",
		city: "Ahmedabad",
		state: "Gujarat",
		address: "Narol, Ahmedabad 382405",
		lat: 22.9732,
		lng: 72.5901,
		status: "pipeline_fy27",
		fy: "FY27",
		p: 35,
		close: "2026-12-15",
		owner: "Kabir Khan",
		stage: "Needs Assessment",
		cr: 3.2,
		pax: 2500,
		biz: "Manufacturing",
		map: "Map 1",
		served: 0,
		services: "Industrial canteen",
		cpu: "cpu_amd",
		last: "Mill visit",
		lastOn: "2026-08-10",
		next: "Labour contractor map",
		nextOn: "2026-09-18",
		notes: "First Gujarat manufacturing pursuit at scale."
	},
	{
		n: 47,
		acc: "amber",
		client: "Amber IT",
		site: "Jaipur SEZ",
		type: "New Logo",
		industry: "IT / ITeS",
		city: "Jaipur",
		state: "Rajasthan",
		address: "Mahindra SEZ, Jaipur 302037",
		lat: 26.885,
		lng: 75.7384,
		status: "universe",
		fy: "FY28",
		p: 5,
		close: "",
		owner: "Vikram Singh",
		stage: "",
		cr: 2.5,
		pax: 1300,
		biz: "B&I",
		map: "Map 1",
		served: 0,
		services: "Campus cafeteria",
		cpu: "",
		last: "Universe add",
		lastOn: "2026-06-28",
		next: "Assign kitchen strategy",
		nextOn: "2026-10-30",
		notes: "No CPU assigned. Greenfield kitchen if we pursue."
	},
	{
		n: 48,
		acc: "malabar",
		client: "Malabar Hospitals",
		site: "Kochi Centre",
		type: "New Logo",
		industry: "Healthcare Provider",
		city: "Kochi",
		state: "Kerala",
		address: "Ernakulam, Kochi 682016",
		lat: 9.9816,
		lng: 76.2999,
		status: "prospect_research",
		fy: "FY28",
		p: 15,
		close: "2027-04-12",
		owner: "Meera Iyer",
		stage: "Discovery",
		cr: 2.9,
		pax: 640,
		biz: "Healthcare",
		map: "Mix",
		served: 0,
		services: "Patient meals, staff cafe",
		cpu: "",
		last: "Kerala market scan",
		lastOn: "2026-08-02",
		next: "Partner kitchen options",
		nextOn: "2026-10-06",
		notes: "No Siteline CPU in Kerala yet. Feasibility is the story."
	},
	{
		n: 49,
		acc: "hooghly",
		client: "Hooghly Engineering",
		site: "Salt Lake Works",
		type: "Retention",
		industry: "Engineering",
		city: "Kolkata",
		state: "West Bengal",
		address: "Salt Lake Sector V, Kolkata 700091",
		lat: 22.5734,
		lng: 88.4342,
		status: "existing_client",
		fy: "",
		p: 100,
		close: "",
		owner: "Kabir Khan",
		stage: "Live",
		cr: 4.5,
		pax: 1800,
		biz: "Manufacturing",
		map: "Mix",
		served: 1800,
		services: "Industrial canteen, cafe",
		cpu: "cpu_kol",
		last: "Durga Puja roster",
		lastOn: "2026-08-17",
		next: "Puja shutdown plan",
		nextOn: "2026-09-20",
		notes: "Only live East account. CPU on the same block."
	},
	{
		n: 50,
		acc: "gomti",
		client: "Gomti University",
		site: "Lucknow Campus",
		type: "New Logo",
		industry: "Higher Education",
		city: "Lucknow",
		state: "Uttar Pradesh",
		address: "Gomti Nagar, Lucknow 226010",
		lat: 26.8512,
		lng: 81.0078,
		status: "pipeline_fy26",
		fy: "FY26",
		p: 25,
		close: "2026-10-12",
		owner: "Vikram Singh",
		stage: "Commercials",
		cr: 2.1,
		pax: 2800,
		biz: "Education",
		map: "Map 1",
		served: 0,
		services: "Hostel mess",
		cpu: "",
		last: "Tender queries",
		lastOn: "2026-05-09",
		next: "Re-bid decision",
		nextOn: "2026-09-14",
		notes: "No CPU. Stale. High pax education in a white space city."
	},
	{
		n: 51,
		acc: "malwa",
		client: "Malwa Auto",
		site: "Pithampur",
		type: "New Logo",
		industry: "Automotive",
		city: "Indore",
		state: "Madhya Pradesh",
		address: "Pithampur Industrial, Dhar 454775",
		lat: 22.6101,
		lng: 75.6822,
		status: "pipeline_fy27",
		fy: "FY27",
		p: 30,
		close: "2027-01-28",
		owner: "Kabir Khan",
		stage: "Needs Assessment",
		cr: 5.4,
		pax: 3100,
		biz: "Manufacturing",
		map: "Map 1",
		served: 0,
		services: "Industrial canteen, 3-shift",
		cpu: "",
		last: "Plant tour",
		lastOn: "2026-08-09",
		next: "Greenfield kitchen model",
		nextOn: "2026-09-28",
		notes: "No CPU. High pax. Would need on-site kitchen from day one."
	},
	{
		n: 52,
		acc: "shivalik",
		client: "Shivalik Bank",
		site: "Chandigarh HQ",
		type: "New Logo",
		industry: "BFSI",
		city: "Chandigarh",
		state: "Chandigarh",
		address: "Sector 9, Chandigarh 160009",
		lat: 30.7472,
		lng: 76.7933,
		status: "proposal_development",
		fy: "FY27",
		p: 40,
		close: "2026-11-08",
		owner: "Vikram Singh",
		stage: "Solution Design",
		cr: 1.6,
		pax: 340,
		biz: "B&I",
		map: "Map 2",
		served: 0,
		services: "HQ cafe, pantry",
		cpu: "",
		last: "Concept deck",
		lastOn: "2026-08-23",
		next: "Facilities walkthrough",
		nextOn: "2026-09-19",
		notes: "Small HQ. North cluster with NCR owners. No CPU yet."
	}
];
function pad(n) {
	return String(n).padStart(3, "0");
}
function buildSampleAccounts(kitchens = KITCHENS) {
	const now = "2026-09-06T08:00:00.000Z";
	return SEED.map((s) => {
		return applyKitchen({
			id: `sit_${pad(s.n)}`,
			accountId: `acc_${s.acc}`,
			clientName: s.client,
			accountType: s.type,
			industry: s.industry,
			siteId: `ste_${pad(s.n)}`,
			siteName: s.site,
			city: s.city,
			state: s.state,
			address: s.address,
			lat: s.lat,
			lng: s.lng,
			opportunityId: `opp_${pad(s.n)}`,
			status: s.status,
			pipelineFy: s.fy,
			probability: s.p,
			expectedClosureDate: s.close,
			owner: s.owner,
			proposalStage: s.stage,
			estimatedRevenue: Math.round(s.cr * 1e7),
			estimatedPax: s.pax,
			businessType: s.biz,
			mapType: s.map,
			paxBeingServed: s.served,
			servicesRequired: s.services,
			kitchenId: s.cpu,
			distanceKm: null,
			roadDistanceKm: null,
			travelMinutes: null,
			lastActivity: s.last,
			lastActivityDate: s.lastOn,
			nextAction: s.next,
			nextActionDate: s.nextOn,
			notes: s.notes,
			createdAt: now,
			updatedAt: now
		}, kitchens);
	});
}
var SAMPLE_ACCOUNTS = buildSampleAccounts();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function uid(prefix = "id") {
	return `${prefix}_${Math.random().toString(36).slice(2, 8)}${Date.now().toString(36).slice(-3)}`;
}
function formatINR(n) {
	if (!Number.isFinite(n) || n === 0) return "—";
	if (Math.abs(n) >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
	if (Math.abs(n) >= 1e5) return `₹${(n / 1e5).toFixed(1)} L`;
	return `₹${Math.round(n).toLocaleString("en-IN")}`;
}
function formatPax(n) {
	if (!Number.isFinite(n) || n === 0) return "—";
	return n.toLocaleString("en-IN");
}
function formatKm(n) {
	if (n == null || !Number.isFinite(n)) return "—";
	return `${n.toFixed(1)} km`;
}
function formatTravel(min) {
	if (min == null || !Number.isFinite(min)) return "—";
	if (min < 60) return `${Math.round(min)} min`;
	const h = Math.floor(min / 60);
	const m = Math.round(min % 60);
	return m ? `${h}h ${m}m` : `${h}h`;
}
function formatDate(iso) {
	if (!iso) return "—";
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return iso;
	return d.toLocaleDateString("en-IN", {
		day: "2-digit",
		month: "short",
		year: "numeric"
	});
}
function daysAgo(iso) {
	if (!iso) return null;
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return null;
	return Math.floor((Date.now() - d.getTime()) / 864e5);
}
function daysUntil(iso) {
	if (!iso) return null;
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return null;
	return Math.ceil((d.getTime() - Date.now()) / 864e5);
}
function normalizeKey(value) {
	return value.trim().toLowerCase().replace(/\s+/g, " ");
}
function accountMatchKey(clientName, siteName, city) {
	return `${normalizeKey(clientName)}|${normalizeKey(siteName)}|${normalizeKey(city)}`;
}
var useDashboard = create()(persist((set, get) => ({
	accounts: SAMPLE_ACCOUNTS,
	kitchens: KITCHENS,
	filters: EMPTY_FILTERS,
	search: "",
	view: "table",
	selectedId: null,
	hoveredId: null,
	profileOpen: false,
	formMode: "closed",
	importOpen: false,
	filtersOpen: true,
	insightsOpen: true,
	nearestId: null,
	nearestRadius: 10,
	showCpuLinks: false,
	groupBy: "",
	setView: (view) => set({ view }),
	setSearch: (search) => set({ search }),
	setFilters: (patch) => set({ filters: {
		...get().filters,
		...patch
	} }),
	resetFilters: () => set({
		filters: EMPTY_FILTERS,
		search: ""
	}),
	toggleStatus: (id) => {
		const cur = get().filters.statuses;
		const next = cur.includes(id) ? cur.filter((s) => s !== id) : [...cur, id];
		set({ filters: {
			...get().filters,
			statuses: next
		} });
	},
	setSelected: (id, openProfile = false) => set({
		selectedId: id,
		profileOpen: openProfile && !!id
	}),
	setHovered: (id) => set({ hoveredId: id }),
	setFormMode: (formMode) => set({ formMode }),
	setImportOpen: (importOpen) => set({ importOpen }),
	setFiltersOpen: (filtersOpen) => set({ filtersOpen }),
	setInsightsOpen: (insightsOpen) => set({ insightsOpen }),
	setNearest: (id, radius) => set({
		nearestId: id,
		nearestRadius: radius ?? get().nearestRadius,
		view: id ? "map" : get().view,
		selectedId: id ?? get().selectedId
	}),
	setNearestRadius: (nearestRadius) => set({ nearestRadius }),
	setShowCpuLinks: (showCpuLinks) => set({ showCpuLinks }),
	setGroupBy: (groupBy) => set({ groupBy }),
	upsertAccount: (record) => {
		const kitchens = get().kitchens;
		const next = applyKitchen({
			...record,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		}, kitchens);
		const accounts = get().accounts;
		const idx = accounts.findIndex((a) => a.id === next.id);
		if (idx >= 0) {
			const copy = accounts.slice();
			copy[idx] = next;
			set({
				accounts: copy,
				formMode: "closed"
			});
		} else set({
			accounts: [{
				...next,
				id: next.id || uid("sit"),
				createdAt: next.createdAt || (/* @__PURE__ */ new Date()).toISOString()
			}, ...accounts],
			formMode: "closed"
		});
	},
	deleteAccount: (id) => set({
		accounts: get().accounts.filter((a) => a.id !== id),
		selectedId: get().selectedId === id ? null : get().selectedId,
		profileOpen: get().selectedId === id ? false : get().profileOpen
	}),
	replaceAccounts: (accounts) => set({ accounts }),
	resetSample: () => set({
		accounts: buildSampleAccounts(KITCHENS),
		kitchens: KITCHENS,
		filters: EMPTY_FILTERS,
		search: "",
		selectedId: null,
		profileOpen: false,
		nearestId: null
	})
}), {
	name: "siteline-pipeline-v1",
	skipHydration: true,
	partialize: (s) => ({
		accounts: s.accounts,
		kitchens: s.kitchens
	})
}));
function StatusDot({ status, size = "sm" }) {
	const meta = STATUS_META[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-block shrink-0 rounded-full", size === "sm" ? "size-2.5" : "size-3"),
		style: { background: meta.hex },
		"aria-hidden": true
	});
}
function StatusBadge({ status }) {
	const meta = STATUS_META[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium",
		style: {
			background: `${meta.hex}22`,
			color: meta.hex
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusDot, { status }), meta.label]
	});
}
function AccountHoverCard({ account, kitchen }) {
	const meta = STATUS_META[account.status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-72 rounded-lg bg-card p-3 text-card-foreground shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-medium leading-snug",
				children: [account.clientName, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-muted-foreground",
					children: [" — ", account.siteName]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: [
					account.industry,
					" · ",
					account.businessType
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex items-center gap-1.5 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusDot, { status: account.status }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: meta.hex },
						children: meta.label
					}),
					account.pipelineFy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted-foreground",
						children: ["· ", account.pipelineFy]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted-foreground",
						children: "Pax"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "tabular font-medium",
						children: formatPax(account.estimatedPax)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted-foreground",
						children: "Est. revenue"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "tabular font-medium",
						children: formatINR(account.estimatedRevenue)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted-foreground",
						children: "Map type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: account.mapType || "—" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted-foreground",
						children: "CPU"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "truncate",
						children: kitchen?.name ?? "Unassigned"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted-foreground",
						children: "Distance"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "tabular",
						children: formatKm(account.distanceKm)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted-foreground",
						children: "City"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: account.city })] })
				]
			})
		]
	});
}
var Dialog = Dialog$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-foreground/40", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 w-[min(920px,calc(100vw-1.5rem))] max-h-[min(90dvh,840px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-card text-card-foreground shadow-[var(--shadow-border)]", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-3 right-3 inline-flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("border-b px-5 py-4", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-serif text-lg font-medium tracking-tight", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("mt-1 text-sm text-muted-foreground", className),
		...props
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-muted",
			outline: "bg-card shadow-[var(--shadow-border)] hover:bg-muted",
			ghost: "hover:bg-muted",
			destructive: "bg-destructive text-destructive-foreground hover:opacity-90"
		},
		size: {
			default: "h-10 px-4",
			sm: "h-8 rounded-sm px-3 text-xs",
			lg: "h-11 px-5",
			icon: "size-10",
			"icon-sm": "size-8"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	type,
	ref,
	className: cn("flex h-10 w-full rounded-md bg-card px-3 text-sm shadow-[var(--shadow-border)] transition-[box-shadow] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
	...props
}));
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	ref,
	className: cn("flex min-h-24 w-full rounded-md bg-card px-3 py-2 text-sm shadow-[var(--shadow-border)] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className),
	...props
}));
Textarea.displayName = "Textarea";
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium text-muted-foreground", className),
		...props
	});
}
function NativeSelect({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn("flex h-10 w-full rounded-md bg-card px-3 text-sm shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className),
		...props
	});
}
var IMPORTABLE_FIELDS = [
	{
		field: "clientName",
		label: "Client / Account Name"
	},
	{
		field: "siteName",
		label: "Site Name"
	},
	{
		field: "accountType",
		label: "Account Type"
	},
	{
		field: "industry",
		label: "Industry / Segment"
	},
	{
		field: "city",
		label: "City"
	},
	{
		field: "state",
		label: "State"
	},
	{
		field: "address",
		label: "Full Address"
	},
	{
		field: "lat",
		label: "Latitude"
	},
	{
		field: "lng",
		label: "Longitude"
	},
	{
		field: "status",
		label: "Pipeline Status"
	},
	{
		field: "pipelineFy",
		label: "Pipeline FY"
	},
	{
		field: "probability",
		label: "Probability %"
	},
	{
		field: "expectedClosureDate",
		label: "Expected Closure Date"
	},
	{
		field: "owner",
		label: "Opportunity Owner"
	},
	{
		field: "proposalStage",
		label: "Proposal Stage"
	},
	{
		field: "estimatedRevenue",
		label: "Estimated Revenue"
	},
	{
		field: "estimatedPax",
		label: "Estimated Pax"
	},
	{
		field: "lastActivity",
		label: "Last Activity"
	},
	{
		field: "lastActivityDate",
		label: "Last Activity Date"
	},
	{
		field: "nextAction",
		label: "Next Action"
	},
	{
		field: "nextActionDate",
		label: "Next Action Date"
	},
	{
		field: "businessType",
		label: "Business Type"
	},
	{
		field: "mapType",
		label: "Map Type"
	},
	{
		field: "paxBeingServed",
		label: "Pax Being Served"
	},
	{
		field: "servicesRequired",
		label: "Services Required"
	},
	{
		field: "kitchenId",
		label: "Central Kitchen / CPU"
	},
	{
		field: "notes",
		label: "Notes"
	}
];
function guessMapping(headers) {
	return headers.map((source) => {
		return {
			source,
			field: FIELD_ALIASES[source.trim().toLowerCase().replace(/\s+/g, " ")] ?? ""
		};
	});
}
async function parseWorkbook(file) {
	const buf = await file.arrayBuffer();
	const wb = readSync(buf, {
		type: "array",
		cellDates: true
	});
	const sheet = wb.Sheets[wb.SheetNames[0] ?? ""];
	if (!sheet) return {
		headers: [],
		rows: []
	};
	const json = utils.sheet_to_json(sheet, {
		defval: "",
		raw: true
	});
	return {
		headers: json.length > 0 ? Object.keys(json[0] ?? {}) : [],
		rows: json
	};
}
function mapRows(rawRows, mapping, existing, kitchens) {
	const mapBySource = new Map(mapping.map((m) => [m.source, m.field]));
	const byKey = new Map(existing.map((r) => [accountMatchKey(r.clientName, r.siteName, r.city), r.id]));
	return rawRows.map((raw, i) => {
		const data = {};
		for (const [source, value] of Object.entries(raw)) {
			const field = mapBySource.get(source);
			if (!field) continue;
			assignField(data, field, value, kitchens);
		}
		const errors = [];
		const warnings = [];
		if (!data.clientName) errors.push("Client name is required");
		if (!data.siteName) errors.push("Site name is required");
		if (!data.status) errors.push("Pipeline status is required");
		if (data.lat != null && data.lng != null) {
			if (!Number.isFinite(data.lat) || !Number.isFinite(data.lng)) errors.push("Latitude / longitude must be numbers");
		} else warnings.push("Missing coordinates — map pin will be unavailable until added");
		const key = data.clientName && data.siteName ? accountMatchKey(data.clientName, data.siteName, data.city ?? "") : "";
		const matchId = key ? byKey.get(key) ?? null : null;
		if (matchId) warnings.push("Matches an existing site — choose Update, Skip, or Create New");
		return {
			rowNumber: i + 2,
			raw,
			data,
			errors,
			warnings,
			matchId,
			decision: matchId ? "update" : "create"
		};
	});
}
function assignField(data, field, value, kitchens) {
	if (value == null || value === "") return;
	switch (field) {
		case "lat":
		case "lng":
		case "probability":
		case "estimatedPax":
		case "paxBeingServed":
			data[field] = Number(value);
			break;
		case "estimatedRevenue":
			data.estimatedRevenue = parseRevenue(value);
			break;
		case "status":
			data.status = parseStatus(value);
			break;
		case "pipelineFy":
			data.pipelineFy = parseFy(value);
			break;
		case "businessType":
			data.businessType = parseEnum(value, BUSINESS_TYPES, "B&I");
			break;
		case "mapType":
			data.mapType = parseEnum(value, MAP_TYPES, "Mix");
			break;
		case "accountType":
			data.accountType = parseEnum(value, ACCOUNT_TYPES, "New Logo");
			break;
		case "expectedClosureDate":
		case "lastActivityDate":
		case "nextActionDate":
			data[field] = parseDate(value);
			break;
		case "kitchenId": {
			const name = String(value).trim().toLowerCase();
			data.kitchenId = kitchens.find((k) => k.id === String(value) || k.name.toLowerCase() === name)?.id ?? "";
			break;
		}
		default: data[field] = String(value).trim();
	}
}
function parseRevenue(value) {
	if (typeof value === "number" && Number.isFinite(value)) {
		if (value > 0 && value < 200) return Math.round(value * 1e7);
		return Math.round(value);
	}
	const s = String(value).replace(/[₹,\s]/g, "").toLowerCase();
	if (!s) return 0;
	if (s.endsWith("cr") || s.endsWith("crore")) return Math.round(parseFloat(s) * 1e7);
	if (s.endsWith("l") || s.endsWith("lakh") || s.endsWith("lac")) return Math.round(parseFloat(s) * 1e5);
	return Math.round(parseFloat(s) || 0);
}
function parseStatus(value) {
	const s = String(value).trim().toLowerCase().replace(/[_-]+/g, " ");
	const hit = STATUS_LIST.find((m) => m.label.toLowerCase() === s || m.id.replace(/_/g, " ") === s || m.short.toLowerCase() === s);
	if (hit) return hit.id;
	if (PIPELINE_STATUS_IDS.includes(s)) return s;
	return "universe";
}
function parseFy(value) {
	const s = String(value).trim().toUpperCase();
	if (PIPELINE_FYS.includes(s)) return s;
	return "";
}
function parseEnum(value, allowed, fallback) {
	const s = String(value).trim();
	return allowed.find((a) => a.toLowerCase() === s.toLowerCase()) ?? fallback;
}
function parseDate(value) {
	if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString().slice(0, 10);
	if (typeof value === "number") return new Date(Date.UTC(1899, 11, 30) + value * 864e5).toISOString().slice(0, 10);
	const s = String(value).trim();
	if (!s) return "";
	const d = new Date(s);
	if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);
	return s;
}
function commitImport(rows, existing, kitchens) {
	const next = [...existing];
	let created = 0;
	let updated = 0;
	let skipped = 0;
	let errors = 0;
	const now = (/* @__PURE__ */ new Date()).toISOString();
	for (const row of rows) {
		if (row.errors.length) {
			errors += 1;
			continue;
		}
		if (row.decision === "skip") {
			skipped += 1;
			continue;
		}
		const merged = applyKitchen({
			...blankRecord(now),
			...row.data,
			updatedAt: now
		}, kitchens);
		if (row.decision === "update" && row.matchId) {
			const idx = next.findIndex((r) => r.id === row.matchId);
			if (idx >= 0) {
				const prev = next[idx];
				next[idx] = applyKitchen({
					...prev,
					...row.data,
					id: prev.id,
					accountId: prev.accountId,
					siteId: prev.siteId,
					opportunityId: prev.opportunityId,
					createdAt: prev.createdAt,
					updatedAt: now
				}, kitchens);
				updated += 1;
				continue;
			}
		}
		next.push(merged);
		created += 1;
	}
	return {
		next,
		summary: {
			created,
			updated,
			skipped,
			errors
		}
	};
}
function blankRecord(now) {
	return {
		id: uid("sit"),
		accountId: uid("acc"),
		clientName: "",
		accountType: "New Logo",
		industry: "",
		siteId: uid("ste"),
		siteName: "",
		city: "",
		state: "",
		address: "",
		lat: 0,
		lng: 0,
		opportunityId: uid("opp"),
		status: "universe",
		pipelineFy: "",
		probability: 0,
		expectedClosureDate: "",
		owner: "",
		proposalStage: "",
		estimatedRevenue: 0,
		estimatedPax: 0,
		businessType: "B&I",
		mapType: "Mix",
		paxBeingServed: 0,
		servicesRequired: "",
		kitchenId: "",
		distanceKm: null,
		roadDistanceKm: null,
		travelMinutes: null,
		lastActivity: "",
		lastActivityDate: "",
		nextAction: "",
		nextActionDate: "",
		notes: "",
		createdAt: now,
		updatedAt: now
	};
}
function exportWorkbook(rows, kitchens) {
	const kitchenName = (id) => kitchens.find((k) => k.id === id)?.name ?? "";
	const data = rows.map((r) => ({
		"Client / Account Name": r.clientName,
		"Site Name": r.siteName,
		"Account Type": r.accountType,
		"Industry / Segment": r.industry,
		City: r.city,
		State: r.state,
		"Full Address": r.address,
		Latitude: r.lat,
		Longitude: r.lng,
		"Pipeline Status": STATUS_LIST.find((s) => s.id === r.status)?.label ?? r.status,
		"Pipeline FY": r.pipelineFy,
		"Probability %": r.probability,
		"Expected Closure Date": r.expectedClosureDate,
		"Opportunity Owner": r.owner,
		"Proposal Stage": r.proposalStage,
		"Estimated Revenue": r.estimatedRevenue,
		"Estimated Pax": r.estimatedPax,
		"Last Activity": r.lastActivity,
		"Last Activity Date": r.lastActivityDate,
		"Next Action": r.nextAction,
		"Next Action Date": r.nextActionDate,
		"Business Type": r.businessType,
		"Map Type": r.mapType,
		"Pax Being Served": r.paxBeingServed,
		"Services Required": r.servicesRequired,
		"Central Kitchen / CPU": kitchenName(r.kitchenId),
		"Distance from Central Kitchen": r.distanceKm ?? "",
		"Travel Time from Central Kitchen": r.travelMinutes ?? "",
		Notes: r.notes
	}));
	const ws = utils.json_to_sheet(data);
	const wb = utils.book_new();
	utils.book_append_sheet(wb, ws, "Pipeline");
	const out = writeSync(wb, {
		bookType: "xlsx",
		type: "array"
	});
	return new Blob([out], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}
function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
function AccountForm() {
	const formMode = useDashboard((s) => s.formMode);
	const setFormMode = useDashboard((s) => s.setFormMode);
	const accounts = useDashboard((s) => s.accounts);
	const selectedId = useDashboard((s) => s.selectedId);
	const kitchens = useDashboard((s) => s.kitchens);
	const upsertAccount = useDashboard((s) => s.upsertAccount);
	const editing = formMode === "edit" ? accounts.find((a) => a.id === selectedId) : null;
	const open = formMode !== "closed";
	const [draft, setDraft] = (0, import_react.useState)(blankRecord((/* @__PURE__ */ new Date()).toISOString()));
	(0, import_react.useEffect)(() => {
		if (formMode === "edit" && editing) setDraft(editing);
		if (formMode === "create") setDraft(blankRecord((/* @__PURE__ */ new Date()).toISOString()));
	}, [formMode, editing?.id]);
	function set(key, value) {
		setDraft((d) => ({
			...d,
			[key]: value
		}));
	}
	function save() {
		if (!draft.clientName.trim() || !draft.siteName.trim()) return;
		upsertAccount({
			...draft,
			lat: Number(draft.lat) || 0,
			lng: Number(draft.lng) || 0,
			probability: Number(draft.probability) || 0,
			estimatedRevenue: Number(draft.estimatedRevenue) || 0,
			estimatedPax: Number(draft.estimatedPax) || 0,
			paxBeingServed: Number(draft.paxBeingServed) || 0
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => !v && setFormMode("closed"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: formMode === "edit" ? "Edit account" : "Add account" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Site-level record. Distances to the assigned CPU are calculated automatically." })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "atlas-scroll max-h-[min(70dvh,640px)] space-y-5 overflow-y-auto px-5 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "grid gap-3 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "col-span-full mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase",
								children: "Account"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Client / account name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: draft.clientName,
									onChange: (e) => set("clientName", e.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Site name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: draft.siteName,
									onChange: (e) => set("siteName", e.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Account type",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
									value: draft.accountType,
									onChange: (e) => set("accountType", e.target.value),
									children: ACCOUNT_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t }, t))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Industry",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
									value: draft.industry,
									onChange: (e) => set("industry", e.target.value),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select"
									}), INDUSTRIES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t }, t))]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "City",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: draft.city,
									onChange: (e) => set("city", e.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "State",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: draft.state,
									onChange: (e) => set("state", e.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Address",
								className: "md:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: draft.address,
									onChange: (e) => set("address", e.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Latitude",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									step: "0.0001",
									value: draft.lat || "",
									onChange: (e) => set("lat", Number(e.target.value))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Longitude",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									step: "0.0001",
									value: draft.lng || "",
									onChange: (e) => set("lng", Number(e.target.value))
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "grid gap-3 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "col-span-full mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase",
								children: "Pipeline"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Status",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
									value: draft.status,
									onChange: (e) => set("status", e.target.value),
									children: STATUS_LIST.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: s.id,
										children: s.label
									}, s.id))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Pipeline FY",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
									value: draft.pipelineFy,
									onChange: (e) => set("pipelineFy", e.target.value),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "—"
									}), PIPELINE_FYS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: f }, f))]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Probability %",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 0,
									max: 100,
									value: draft.probability || "",
									onChange: (e) => set("probability", Number(e.target.value))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Expected closure",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "date",
									value: draft.expectedClosureDate,
									onChange: (e) => set("expectedClosureDate", e.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Owner",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
									value: draft.owner,
									onChange: (e) => set("owner", e.target.value),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select"
										}),
										OWNERS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o)),
										draft.owner && !OWNERS.includes(draft.owner) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: draft.owner }) : null
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Proposal stage",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
									value: draft.proposalStage,
									onChange: (e) => set("proposalStage", e.target.value),
									children: PROPOSAL_STAGES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: s,
										children: s || "—"
									}, s || "blank"))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Est. revenue (₹ Cr)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									step: "0.1",
									value: draft.estimatedRevenue ? draft.estimatedRevenue / 1e7 : "",
									onChange: (e) => set("estimatedRevenue", Number(e.target.value) * 1e7)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Est. pax",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									value: draft.estimatedPax || "",
									onChange: (e) => set("estimatedPax", Number(e.target.value))
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "grid gap-3 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "col-span-full mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase",
								children: "Operations"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Business type",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
									value: draft.businessType,
									onChange: (e) => set("businessType", e.target.value),
									children: BUSINESS_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t }, t))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Map type",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
									value: draft.mapType,
									onChange: (e) => set("mapType", e.target.value),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "—"
									}), MAP_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t }, t))]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Pax being served",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									value: draft.paxBeingServed || "",
									onChange: (e) => set("paxBeingServed", Number(e.target.value))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Central kitchen",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
									value: draft.kitchenId,
									onChange: (e) => set("kitchenId", e.target.value),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Unassigned"
									}), kitchens.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: k.id,
										children: k.name
									}, k.id))]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Services",
								className: "md:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: draft.servicesRequired,
									onChange: (e) => set("servicesRequired", e.target.value)
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "grid gap-3 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "col-span-full mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase",
								children: "Activity"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Last activity",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: draft.lastActivity,
									onChange: (e) => set("lastActivity", e.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Last activity date",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "date",
									value: draft.lastActivityDate,
									onChange: (e) => set("lastActivityDate", e.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Next action",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: draft.nextAction,
									onChange: (e) => set("nextAction", e.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Next action date",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "date",
									value: draft.nextActionDate,
									onChange: (e) => set("nextActionDate", e.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Notes",
								className: "md:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									value: draft.notes,
									onChange: (e) => set("notes", e.target.value)
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-end gap-2 border-t px-5 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => setFormMode("closed"),
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: save,
					disabled: !draft.clientName.trim() || !draft.siteName.trim(),
					children: "Save account"
				})]
			})
		] })
	});
}
function Field({ label, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `grid gap-1.5 ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
function AccountProfile() {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "absolute inset-y-0 right-0 z-30 flex w-full max-w-md flex-col bg-card shadow-[var(--shadow-border)] md:rounded-l-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-start justify-between gap-3 border-b px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-lg leading-tight font-medium",
						children: rec.clientName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-0.5 flex items-center gap-1 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }),
							rec.siteName,
							" · ",
							rec.city
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-9 items-center justify-center rounded-md hover:bg-muted",
					onClick: () => setSelected(rec.id, false),
					"aria-label": "Close profile",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "atlas-scroll flex-1 space-y-6 overflow-y-auto px-5 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: rec.status }),
							rec.pipelineFy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-muted px-2 py-0.5 text-xs",
								children: rec.pipelineFy
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-muted px-2 py-0.5 text-xs",
								children: rec.accountType
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Account",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Industry",
								v: rec.industry
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Business type",
								v: rec.businessType
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Address",
								v: rec.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Coordinates",
								v: `${rec.lat.toFixed(4)}, ${rec.lng.toFixed(4)}`
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Pipeline",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Probability",
								v: rec.probability ? `${rec.probability}%` : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Expected closure",
								v: formatDate(rec.expectedClosureDate)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Owner",
								v: rec.owner
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Proposal stage",
								v: rec.proposalStage || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Est. revenue",
								v: formatINR(rec.estimatedRevenue)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Est. pax",
								v: formatPax(rec.estimatedPax)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Operations",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Map type",
								v: rec.mapType || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Pax being served",
								v: formatPax(rec.paxBeingServed)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Services",
								v: rec.servicesRequired || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Central kitchen",
								v: kitchen?.name ?? "Unassigned"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Straight-line",
								v: formatKm(rec.distanceKm)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Road (est.)",
								v: formatKm(rec.roadDistanceKm)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Travel time",
								v: formatTravel(rec.travelMinutes)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Activity",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Last activity",
								v: `${rec.lastActivity || "—"} · ${formatDate(rec.lastActivityDate)}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Next action",
								v: `${rec.nextAction || "—"} · ${formatDate(rec.nextActionDate)}`
							}),
							rec.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pt-1 text-sm leading-relaxed",
								children: rec.notes
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Nearest sites",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 flex flex-wrap gap-1",
							children: RADIUS_OPTIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setNearest(rec.id, r),
								className: "h-7 rounded-full bg-muted px-2.5 text-xs",
								children: [r, " km"]
							}, r))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "space-y-1",
							children: nearby.slice(0, 5).map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "text-left hover:underline",
									onClick: () => setSelected(n.id, true),
									children: [
										i + 1,
										". ",
										n.clientName
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular text-muted-foreground",
									children: [n.km.toFixed(1), " km"]
								})]
							}, n.id))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "flex gap-2 border-t px-5 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "flex-1",
						onClick: () => setNearest(rec.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Route, { className: "size-4" }), "Find nearest"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => setFormMode("edit"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" }), "Edit"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						className: "text-destructive",
						onClick: () => {
							if (confirm(`Remove ${rec.clientName} — ${rec.siteName}?`)) deleteAccount(rec.id);
						},
						children: "Delete"
					})
				]
			})
		]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "space-y-1.5",
		children
	})] });
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[120px_1fr] gap-2 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: v })]
	});
}
function AccountTable({ rows }) {
	const kitchens = useDashboard((s) => s.kitchens);
	const selectedId = useDashboard((s) => s.selectedId);
	const hoveredId = useDashboard((s) => s.hoveredId);
	const setSelected = useDashboard((s) => s.setSelected);
	const setHovered = useDashboard((s) => s.setHovered);
	const groupBy = useDashboard((s) => s.groupBy);
	const [sortKey, setSortKey] = (0, import_react.useState)("clientName");
	const [sortDir, setSortDir] = (0, import_react.useState)("asc");
	const [hoverPos, setHoverPos] = (0, import_react.useState)(null);
	const kitchenName = (id) => kitchens.find((k) => k.id === id)?.name ?? "—";
	const cols = (0, import_react.useMemo)(() => [
		{
			key: "clientName",
			label: "Client"
		},
		{
			key: "siteName",
			label: "Site"
		},
		{
			key: "status",
			label: "Status",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.status })
		},
		{
			key: "pipelineFy",
			label: "FY"
		},
		{
			key: "city",
			label: "City"
		},
		{
			key: "industry",
			label: "Industry"
		},
		{
			key: "businessType",
			label: "Type"
		},
		{
			key: "owner",
			label: "Owner"
		},
		{
			key: "estimatedPax",
			label: "Pax",
			align: "right",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular",
				children: formatPax(r.estimatedPax)
			})
		},
		{
			key: "estimatedRevenue",
			label: "Revenue",
			align: "right",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular",
				children: formatINR(r.estimatedRevenue)
			})
		},
		{
			key: "kitchenId",
			label: "CPU",
			render: (r) => kitchenName(r.kitchenId)
		},
		{
			key: "distanceKm",
			label: "Dist.",
			align: "right",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular",
				children: formatKm(r.distanceKm)
			})
		},
		{
			key: "mapType",
			label: "Map"
		},
		{
			key: "nextActionDate",
			label: "Next action",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: r.nextAction ? `${r.nextAction} · ${formatDate(r.nextActionDate)}` : "—"
			})
		}
	], [kitchens]);
	const sorted = (0, import_react.useMemo)(() => {
		const copy = [...rows];
		copy.sort((a, b) => {
			const av = a[sortKey];
			const bv = b[sortKey];
			const an = av == null ? "" : av;
			const bn = bv == null ? "" : bv;
			if (typeof an === "number" && typeof bn === "number") return sortDir === "asc" ? an - bn : bn - an;
			const cmp = String(an).localeCompare(String(bn), "en-IN");
			return sortDir === "asc" ? cmp : -cmp;
		});
		return copy;
	}, [
		rows,
		sortKey,
		sortDir
	]);
	const groups = (0, import_react.useMemo)(() => groupRows(sorted, groupBy, kitchenName), [
		sorted,
		groupBy,
		kitchens
	]);
	function onSort(key) {
		if (sortKey === key) setSortDir((d) => d === "asc" ? "desc" : "asc");
		else {
			setSortKey(key);
			setSortDir("asc");
		}
	}
	const hovered = rows.find((r) => r.id === hoveredId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full min-h-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "atlas-scroll h-full overflow-auto rounded-lg bg-card shadow-[var(--shadow-border)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[1100px] border-separate border-spacing-0 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "sticky top-0 z-10 bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: cols.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "border-b bg-card px-3 py-2 text-left text-xs font-medium whitespace-nowrap text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "inline-flex items-center gap-1 hover:text-foreground",
							onClick: () => onSort(c.key),
							children: [c.label, sortKey === c.key ? sortDir === "asc" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-3" }) : null]
						})
					}, c.key)) })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupBody, {
					group: g,
					cols,
					selectedId,
					setSelected,
					setHovered,
					setHoverPos,
					showHeader: !!groupBy
				}, g.key)), sorted.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: cols.length,
					className: "px-3 py-16 text-center text-muted-foreground",
					children: "No accounts match the current filters."
				}) }) : null] })]
			})
		}), hovered && hoverPos ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute z-20",
			style: {
				left: Math.min(hoverPos.x + 16, 420),
				top: hoverPos.y + 12
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountHoverCard, {
				account: hovered,
				kitchen: kitchens.find((k) => k.id === hovered.kitchenId)
			})
		}) : null]
	});
}
function GroupBody({ group, cols, selectedId, setSelected, setHovered, setHoverPos, showHeader }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [showHeader ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
		colSpan: cols.length,
		className: "bg-muted/70 px-3 py-1.5 text-xs font-medium text-muted-foreground",
		children: [group.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ml-2 tabular",
			children: group.rows.length
		})]
	}) }) : null, group.rows.map((r) => {
		const meta = STATUS_META[r.status];
		const selected = selectedId === r.id;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
			className: "cursor-pointer hover:bg-accent/60",
			style: { background: selected ? "color-mix(in oklab, var(--color-accent) 70%, white)" : void 0 },
			onClick: () => setSelected(r.id, true),
			onMouseEnter: (e) => {
				setHovered(r.id);
				const rect = e.currentTarget.closest(".relative")?.getBoundingClientRect();
				if (rect) setHoverPos({
					x: e.clientX - rect.left,
					y: e.clientY - rect.top
				});
			},
			onMouseMove: (e) => {
				const rect = e.currentTarget.closest(".relative")?.getBoundingClientRect();
				if (rect) setHoverPos({
					x: e.clientX - rect.left,
					y: e.clientY - rect.top
				});
			},
			onMouseLeave: () => {
				setHovered(null);
				setHoverPos(null);
			},
			children: cols.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "border-b px-3 py-2.5 whitespace-nowrap",
				style: i === 0 ? { boxShadow: `inset 3px 0 0 ${meta.hex}` } : void 0,
				children: c.render ? c.render(r) : String(r[c.key] || "—")
			}, c.key))
		}, r.id);
	})] });
}
function groupRows(rows, groupBy, kitchenName) {
	if (!groupBy) return [{
		key: "all",
		label: "All",
		rows
	}];
	const map = /* @__PURE__ */ new Map();
	for (const r of rows) {
		let key = "—";
		if (groupBy === "status") key = STATUS_META[r.status].label;
		else if (groupBy === "kitchenId") key = kitchenName(r.kitchenId);
		else key = String(r[groupBy] || "—");
		const list = map.get(key) ?? [];
		list.push(r);
		map.set(key, list);
	}
	return Array.from(map.entries()).map(([label, group]) => ({
		key: label,
		label,
		rows: group
	}));
}
function ExcelImport() {
	const importOpen = useDashboard((s) => s.importOpen);
	const setImportOpen = useDashboard((s) => s.setImportOpen);
	const accounts = useDashboard((s) => s.accounts);
	const kitchens = useDashboard((s) => s.kitchens);
	const replaceAccounts = useDashboard((s) => s.replaceAccounts);
	const [step, setStep] = (0, import_react.useState)(1);
	const [headers, setHeaders] = (0, import_react.useState)([]);
	const [rawRows, setRawRows] = (0, import_react.useState)([]);
	const [mapping, setMapping] = (0, import_react.useState)([]);
	const [mapped, setMapped] = (0, import_react.useState)([]);
	const [summary, setSummary] = (0, import_react.useState)(null);
	function reset() {
		setStep(1);
		setHeaders([]);
		setRawRows([]);
		setMapping([]);
		setMapped([]);
		setSummary(null);
	}
	async function onFile(file) {
		if (!file) return;
		const parsed = await parseWorkbook(file);
		const guessed = guessMapping(parsed.headers);
		setHeaders(parsed.headers);
		setRawRows(parsed.rows);
		setMapping(guessed);
		setStep(2);
	}
	function runMap() {
		const rows = mapRows(rawRows, mapping, accounts, kitchens);
		setMapped(rows);
		setStep(3);
	}
	function setDecision(rowNumber, decision) {
		setMapped((rows) => rows.map((r) => r.rowNumber === rowNumber ? {
			...r,
			decision
		} : r));
	}
	function commit() {
		const result = commitImport(mapped, accounts, kitchens);
		replaceAccounts(result.next);
		setSummary(result.summary);
		toast.success(`Imported ${result.summary.created} new, ${result.summary.updated} updated, ${result.summary.skipped} skipped.`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: importOpen,
		onOpenChange: (v) => {
			setImportOpen(v);
			if (!v) reset();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Upload Excel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Detect headers, map columns, review conflicts, then commit. Existing sites are never overwritten without an explicit Update." })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "atlas-scroll max-h-[min(70dvh,640px)] overflow-y-auto px-5 py-4",
				children: [
					step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground hover:bg-muted/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: ".xlsx,.xls,.csv",
							className: "sr-only",
							onChange: (e) => void onFile(e.target.files?.[0])
						}), "Drop an Excel or CSV file, or click to browse"]
					}) : null,
					step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [rawRows.length, " rows detected. Map each spreadsheet column to a Siteline field."]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-auto rounded-md bg-muted/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "text-left text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2",
										children: "Excel column"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2",
										children: "Siteline field"
									})]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: headers.map((h) => {
									const current = mapping.find((m) => m.source === h)?.field ?? "";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2",
											children: h
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
												value: current,
												onChange: (e) => setMapping((prev) => prev.map((m) => m.source === h ? {
													...m,
													field: e.target.value
												} : m)),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Ignore"
												}), IMPORTABLE_FIELDS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: f.field,
													children: f.label
												}, f.field))]
											})
										})]
									}, h);
								}) })]
							})
						})]
					}) : null,
					step === 3 && !summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Review each row. Matches on client + site + city are flagged as duplicates."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-auto rounded-md bg-muted/40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full min-w-[640px] text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "text-left text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-2 py-2",
											children: "Row"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-2 py-2",
											children: "Client"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-2 py-2",
											children: "Site"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-2 py-2",
											children: "Notes"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-2 py-2",
											children: "Action"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: mapped.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-2 py-2 tabular",
											children: r.rowNumber
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-2 py-2",
											children: r.data.clientName
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-2 py-2",
											children: r.data.siteName
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-2 py-2 text-muted-foreground",
											children: [...r.errors, ...r.warnings].join(" · ") || "Ready"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-2 py-2",
											children: r.errors.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-destructive",
												children: "Blocked"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
												className: "h-8",
												value: r.decision,
												onChange: (e) => setDecision(r.rowNumber, e.target.value),
												children: [
													r.matchId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "update",
														children: "Update"
													}) : null,
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "skip",
														children: "Skip"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "create",
														children: "Create new"
													})
												]
											})
										})
									]
								}, r.rowNumber)) })]
							})
						})]
					}) : null,
					summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "New",
								value: summary.created
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Updated",
								value: summary.updated
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Skipped",
								value: summary.skipped
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Errors",
								value: summary.errors
							})
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end gap-2 border-t px-5 py-3",
				children: step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: runMap,
					children: "Review rows"
				}) : step === 3 && !summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: commit,
					children: "Commit import"
				}) : summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						setImportOpen(false);
						reset();
					},
					children: "Done"
				}) : null
			})
		] })
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-muted/50 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-serif text-2xl tabular",
			children: value
		})]
	});
}
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("flex size-4 shrink-0 items-center justify-center rounded-sm bg-card shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }) })
}));
Checkbox.displayName = "Checkbox";
function unique(rows, key) {
	return Array.from(new Set(rows.map((r) => String(r[key] ?? "")).filter(Boolean))).sort();
}
function Multi({ label, options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
			className: "text-xs font-medium text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-h-40 space-y-1 overflow-auto atlas-scroll pr-1",
			children: options.map((o) => {
				const checked = value.includes(o.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex min-h-8 cursor-pointer items-center gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
							checked,
							onCheckedChange: () => onChange(checked ? value.filter((v) => v !== o.id) : [...value, o.id])
						}),
						o.swatch ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-2.5 rounded-full",
							style: { background: o.swatch }
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: o.label
						})
					]
				}, o.id);
			})
		})]
	});
}
function FilterPanel({ all }) {
	const { filters, setFilters, resetFilters, kitchens } = useDashboard();
	const activeCount = countActive(filters);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-1 pb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium",
				children: "Filters"
			}), activeCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ghost",
				size: "sm",
				onClick: resetFilters,
				className: "h-8 px-2 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" }),
					"Clear ",
					activeCount
				]
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "atlas-scroll flex-1 space-y-4 overflow-y-auto pr-1 pb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Multi, {
					label: "Pipeline status",
					options: STATUS_LIST.map((s) => ({
						id: s.id,
						label: s.label,
						swatch: s.hex
					})),
					value: filters.statuses,
					onChange: (statuses) => setFilters({ statuses })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Multi, {
					label: "Pipeline FY",
					options: [
						"FY26",
						"FY27",
						"FY28"
					].map((id) => ({
						id,
						label: id
					})),
					value: filters.fys,
					onChange: (fys) => setFilters({ fys })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Multi, {
					label: "Account type",
					options: unique(all, "accountType").map((id) => ({
						id,
						label: id
					})),
					value: filters.accountTypes,
					onChange: (accountTypes) => setFilters({ accountTypes })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Multi, {
					label: "Industry",
					options: unique(all, "industry").map((id) => ({
						id,
						label: id
					})),
					value: filters.industries,
					onChange: (industries) => setFilters({ industries })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Multi, {
					label: "Business type",
					options: unique(all, "businessType").map((id) => ({
						id,
						label: id
					})),
					value: filters.businessTypes,
					onChange: (businessTypes) => setFilters({ businessTypes })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Multi, {
					label: "City",
					options: unique(all, "city").map((id) => ({
						id,
						label: id
					})),
					value: filters.cities,
					onChange: (cities) => setFilters({ cities })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Multi, {
					label: "State",
					options: unique(all, "state").map((id) => ({
						id,
						label: id
					})),
					value: filters.states,
					onChange: (states) => setFilters({ states })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Multi, {
					label: "Opportunity owner",
					options: unique(all, "owner").map((id) => ({
						id,
						label: id
					})),
					value: filters.owners,
					onChange: (owners) => setFilters({ owners })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Multi, {
					label: "Map type",
					options: [
						"Map 1",
						"Map 2",
						"Mix"
					].map((id) => ({
						id,
						label: id
					})),
					value: filters.mapTypes,
					onChange: (mapTypes) => setFilters({ mapTypes })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Multi, {
					label: "Central kitchen",
					options: [{
						id: "__none__",
						label: "Unassigned"
					}, ...kitchens.map((k) => ({
						id: k.id,
						label: k.name
					}))],
					value: filters.kitchens,
					onChange: (kitchens) => setFilters({ kitchens })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Multi, {
					label: "Proposal stage",
					options: unique(all, "proposalStage").map((id) => ({
						id,
						label: id
					})),
					value: filters.proposalStages,
					onChange: (proposalStages) => setFilters({ proposalStages })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Pax range" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							placeholder: "Min",
							value: filters.paxMin ?? "",
							onChange: (e) => setFilters({ paxMin: e.target.value === "" ? null : Number(e.target.value) })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							placeholder: "Max",
							value: filters.paxMax ?? "",
							onChange: (e) => setFilters({ paxMax: e.target.value === "" ? null : Number(e.target.value) })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Revenue (₹ Cr)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							step: "0.1",
							placeholder: "Min",
							value: filters.revenueMin != null ? filters.revenueMin / 1e7 : "",
							onChange: (e) => setFilters({ revenueMin: e.target.value === "" ? null : Number(e.target.value) * 1e7 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							step: "0.1",
							placeholder: "Max",
							value: filters.revenueMax != null ? filters.revenueMax / 1e7 : "",
							onChange: (e) => setFilters({ revenueMax: e.target.value === "" ? null : Number(e.target.value) * 1e7 })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Max distance from CPU (km)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
						value: filters.distanceMax ?? "",
						onChange: (e) => setFilters({ distanceMax: e.target.value === "" ? null : Number(e.target.value) }),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Any"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "5",
								children: "5 km"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "10",
								children: "10 km"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "25",
								children: "25 km"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "50",
								children: "50 km"
							})
						]
					})]
				})
			]
		})]
	});
}
function countActive(f) {
	let n = 0;
	for (const v of Object.values(f)) if (Array.isArray(v) && v.length) n += 1;
	else if (v != null && !Array.isArray(v)) n += 1;
	return n;
}
function StatusLegend({ selected, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-1",
		children: STATUS_LIST.map((s) => {
			const on = selected.length === 0 || selected.includes(s.id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onToggle(s.id),
				className: "inline-flex h-8 items-center gap-1.5 rounded-full bg-card px-2.5 text-xs shadow-[var(--shadow-border)]",
				style: { opacity: on ? 1 : .4 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusDot, { status: s.id }), s.label]
			}, s.id);
		})
	});
}
function InsightsPanel({ insights, onFocus }) {
	const insightsOpen = useDashboard((s) => s.insightsOpen);
	const setInsightsOpen = useDashboard((s) => s.setInsightsOpen);
	if (!insightsOpen) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setInsightsOpen(true),
		className: "inline-flex h-9 items-center gap-2 rounded-full bg-card px-3 text-sm shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "size-4" }),
			"Opportunity insights",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular text-muted-foreground",
				children: insights.length
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-lg bg-card p-3 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "flex items-center gap-2 text-sm font-medium",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "size-4 text-primary" }), "Opportunity insights"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-xs text-muted-foreground hover:text-foreground",
				onClick: () => setInsightsOpen(false),
				children: "Hide"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "atlas-scroll grid gap-2 md:grid-cols-2 xl:grid-cols-3",
			children: insights.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "No insights for the current filter set."
			}) : insights.map((ins) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onFocus(ins.accountIds),
				className: "rounded-md bg-background p-3 text-left transition-colors hover:bg-accent",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 text-sm font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", ins.severity === "high" ? "bg-destructive" : "bg-primary") }), ins.title]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs leading-relaxed text-muted-foreground",
					children: ins.detail
				})]
			}, ins.id))
		})]
	});
}
var CARDS = [
	{
		key: "total",
		label: "Total accounts"
	},
	{
		key: "existing",
		label: "Existing clients"
	},
	{
		key: "pipeline",
		label: "Pipeline"
	},
	{
		key: "fy26",
		label: "FY26"
	},
	{
		key: "fy27",
		label: "FY27"
	},
	{
		key: "fy28",
		label: "FY28"
	},
	{
		key: "proposalDev",
		label: "Proposal dev"
	},
	{
		key: "proposalSub",
		label: "Submitted"
	},
	{
		key: "won",
		label: "Won"
	},
	{
		key: "lost",
		label: "Lost"
	},
	{
		key: "totalPax",
		label: "Total pax",
		format: "pax"
	},
	{
		key: "pipelineRevenue",
		label: "Pipeline value",
		format: "inr"
	}
];
function KpiBar({ kpis }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "atlas-scroll flex gap-2 overflow-x-auto pb-1 md:grid md:grid-cols-6 md:overflow-visible lg:grid-cols-12",
		children: CARDS.map((c) => {
			const raw = kpis[c.key];
			const value = c.format === "inr" ? formatINR(raw) : c.format === "pax" ? formatPax(raw) : raw.toLocaleString("en-IN");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("min-w-32 shrink-0 rounded-lg bg-card px-3 py-2.5 shadow-[var(--shadow-border)] md:min-w-0"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: c.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-serif text-lg leading-none font-medium tracking-tight tabular",
					children: value
				})]
			}, c.key);
		})
	});
}
function MapPane({ rows }) {
	const [MapView, setMapView] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let alive = true;
		import("./account-map-D7IUE1Zn.mjs").then((mod) => {
			if (alive) setMapView(() => mod.AccountMap);
		});
		return () => {
			alive = false;
		};
	}, []);
	if (!MapView) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full min-h-[420px] items-center justify-center rounded-lg bg-card text-sm text-muted-foreground shadow-[var(--shadow-border)]",
		children: "Loading map…"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapView, { rows });
}
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
function DropdownMenuContent({ className, sideOffset = 6, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		sideOffset,
		className: cn("z-50 min-w-44 overflow-hidden rounded-lg bg-card p-1 text-card-foreground shadow-[var(--shadow-border)]", className),
		...props
	}) });
}
function DropdownMenuItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		className: cn("flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none hover:bg-muted focus:bg-muted", className),
		...props
	});
}
function DropdownMenuSeparator({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
		className: cn("my-1 h-px bg-border", className),
		...props
	});
}
var PIPE = ACTIVE_PIPELINE_STATUSES;
function isPipe(s) {
	return PIPE.includes(s);
}
function computeInsights(rows) {
	const existing = rows.filter((r) => r.status === "existing_client");
	const won = rows.filter((r) => r.status === "won");
	const lost = rows.filter((r) => r.status === "lost");
	const pipeline = rows.filter((r) => isPipe(r.status));
	const insights = [];
	for (const p of pipeline) {
		if (p.estimatedRevenue < 5e7) continue;
		const near = existing.find((e) => haversineKm(p, e) <= 10);
		if (!near) continue;
		insights.push({
			id: `near_ex_${p.id}`,
			kind: "near_existing",
			title: `High-value prospect beside a live client`,
			detail: `${p.clientName} — ${p.siteName} is ${haversineKm(p, near).toFixed(1)} km from ${near.clientName} (${near.siteName}). Reference the live operation in the pursuit.`,
			accountIds: [p.id, near.id],
			severity: "high"
		});
	}
	const cityBuckets = /* @__PURE__ */ new Map();
	for (const r of pipeline) {
		const list = cityBuckets.get(r.city) ?? [];
		list.push(r);
		cityBuckets.set(r.city, list);
	}
	for (const [city, list] of cityBuckets) {
		if (list.length < 3) continue;
		const rev = list.reduce((s, r) => s + r.estimatedRevenue, 0);
		insights.push({
			id: `city_${city}`,
			kind: "city_concentration",
			title: `${city} has a dense pipeline`,
			detail: `${list.length} active pursuits in ${city} totalling ₹${(rev / 1e7).toFixed(1)} Cr. Worth a city war-room.`,
			accountIds: list.map((r) => r.id),
			severity: list.length >= 4 ? "high" : "medium"
		});
	}
	const nearCpu = pipeline.filter((r) => r.distanceKm != null && r.distanceKm <= 12 && r.kitchenId);
	if (nearCpu.length > 0) insights.push({
		id: "near_cpu",
		kind: "near_cpu",
		title: `${nearCpu.length} pursuits sit close to a CPU`,
		detail: "These sites are within 12 km of an assigned central kitchen — operationally easier to mobilise and cheaper to serve.",
		accountIds: nearCpu.map((r) => r.id),
		severity: "medium"
	});
	const highPax = pipeline.filter((r) => r.estimatedPax >= 2500);
	if (highPax.length > 0) insights.push({
		id: "high_pax",
		kind: "high_pax",
		title: `${highPax.length} high-pax opportunities`,
		detail: "Accounts with 2,500+ estimated pax. These change kitchen design, staffing and CPU load — treat as strategic.",
		accountIds: highPax.map((r) => r.id),
		severity: "high"
	});
	const stale = pipeline.filter((r) => {
		const d = daysAgo(r.lastActivityDate);
		return d != null && d >= 45;
	});
	if (stale.length > 0) insights.push({
		id: "stale",
		kind: "stale",
		title: `${stale.length} pipeline accounts have gone quiet`,
		detail: "No recorded activity in 45+ days. Risk of slippage or silent loss — assign a next action this week.",
		accountIds: stale.map((r) => r.id),
		severity: "high"
	});
	const closing = pipeline.filter((r) => {
		const d = daysUntil(r.expectedClosureDate);
		return d != null && d >= 0 && d <= 21;
	});
	if (closing.length > 0) insights.push({
		id: "closing",
		kind: "closing_soon",
		title: `${closing.length} opportunities close within 21 days`,
		detail: "Expected closure is imminent. Confirm owner coverage, commercials and mobilisation readiness.",
		accountIds: closing.map((r) => r.id),
		severity: "high"
	});
	const liveOrWon = [...existing, ...won];
	for (const l of lost) {
		const near = liveOrWon.find((w) => haversineKm(l, w) <= 8);
		if (!near) continue;
		insights.push({
			id: `lost_${l.id}`,
			kind: "lost_near_won",
			title: `Lost account next to a winning site`,
			detail: `${l.clientName} — ${l.siteName} sits ${haversineKm(l, near).toFixed(1)} km from ${near.clientName}. Use the live site as a re-entry proof point.`,
			accountIds: [l.id, near.id],
			severity: "medium"
		});
	}
	for (const e of existing) {
		const nearby = pipeline.filter((p) => haversineKm(e, p) <= 10);
		if (nearby.length < 2) continue;
		insights.push({
			id: `ex_pros_${e.id}`,
			kind: "existing_with_prospects",
			title: `${e.clientName} is a cluster hub`,
			detail: `${nearby.length} active prospects sit within 10 km of ${e.siteName}. Cross-sell the live operation and share CPU capacity.`,
			accountIds: [e.id, ...nearby.map((p) => p.id)],
			severity: "medium"
		});
	}
	const used = /* @__PURE__ */ new Set();
	for (const a of pipeline) {
		if (used.has(a.id)) continue;
		const cluster = pipeline.filter((b) => b.id === a.id || haversineKm(a, b) <= 5);
		if (cluster.length < 3) continue;
		for (const c of cluster) used.add(c.id);
		insights.push({
			id: `geo_${a.id}`,
			kind: "cluster_geo",
			title: `Geographic cluster of ${cluster.length} prospects`,
			detail: `Around ${a.city}: ${cluster.map((c) => c.clientName).join(", ")}. One kitchen plan could serve several of these.`,
			accountIds: cluster.map((c) => c.id),
			severity: "medium"
		});
	}
	const rank = {
		high: 0,
		medium: 1,
		info: 2
	};
	return insights.sort((a, b) => rank[a.severity] - rank[b.severity]).slice(0, 10);
}
function computeKpis(rows) {
	const pipelineStatuses = /* @__PURE__ */ new Set([...PIPE, "universe"]);
	return {
		total: rows.length,
		existing: rows.filter((r) => r.status === "existing_client").length,
		pipeline: rows.filter((r) => pipelineStatuses.has(r.status)).length,
		fy26: rows.filter((r) => r.pipelineFy === "FY26" || r.status === "pipeline_fy26").length,
		fy27: rows.filter((r) => r.pipelineFy === "FY27" || r.status === "pipeline_fy27").length,
		fy28: rows.filter((r) => r.pipelineFy === "FY28" || r.status === "pipeline_fy28").length,
		proposalDev: rows.filter((r) => r.status === "proposal_development").length,
		proposalSub: rows.filter((r) => r.status === "proposal_submitted").length,
		won: rows.filter((r) => r.status === "won").length,
		lost: rows.filter((r) => r.status === "lost").length,
		totalPax: rows.reduce((s, r) => s + (r.estimatedPax || r.paxBeingServed || 0), 0),
		pipelineRevenue: rows.filter((r) => isPipe(r.status)).reduce((s, r) => s + (r.estimatedRevenue || 0), 0)
	};
}
function applyFilters(rows, filters, search) {
	const q = search.trim().toLowerCase();
	return rows.filter((r) => {
		if (filters.statuses.length && !filters.statuses.includes(r.status)) return false;
		if (filters.fys.length && !filters.fys.includes(r.pipelineFy)) return false;
		if (filters.accountTypes.length && !filters.accountTypes.includes(r.accountType)) return false;
		if (filters.industries.length && !filters.industries.includes(r.industry)) return false;
		if (filters.cities.length && !filters.cities.includes(r.city)) return false;
		if (filters.states.length && !filters.states.includes(r.state)) return false;
		if (filters.owners.length && !filters.owners.includes(r.owner)) return false;
		if (filters.mapTypes.length && !filters.mapTypes.includes(r.mapType)) return false;
		if (filters.kitchens.length) {
			const kid = r.kitchenId || "__none__";
			if (!filters.kitchens.includes(kid)) return false;
		}
		if (filters.businessTypes.length && !filters.businessTypes.includes(r.businessType)) return false;
		if (filters.proposalStages.length && !filters.proposalStages.includes(r.proposalStage)) return false;
		if (filters.paxMin != null && r.estimatedPax < filters.paxMin) return false;
		if (filters.paxMax != null && r.estimatedPax > filters.paxMax) return false;
		if (filters.revenueMin != null && r.estimatedRevenue < filters.revenueMin) return false;
		if (filters.revenueMax != null && r.estimatedRevenue > filters.revenueMax) return false;
		if (filters.distanceMax != null) {
			if (r.distanceKm == null || r.distanceKm > filters.distanceMax) return false;
		}
		if (q) {
			if (![
				r.clientName,
				r.siteName,
				r.city,
				r.state,
				r.owner,
				r.industry,
				r.businessType,
				r.servicesRequired,
				r.notes
			].join(" ").toLowerCase().includes(q)) return false;
		}
		return true;
	});
}
function AppShell() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		useDashboard.persist.rehydrate();
		setHydrated(true);
	}, []);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-serif text-2xl tracking-tight",
			children: "Siteline"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		position: "bottom-right",
		richColors: false
	})] });
}
function Dashboard() {
	const accounts = useDashboard((s) => s.accounts);
	const kitchens = useDashboard((s) => s.kitchens);
	const filters = useDashboard((s) => s.filters);
	const search = useDashboard((s) => s.search);
	const setSearch = useDashboard((s) => s.setSearch);
	const view = useDashboard((s) => s.view);
	const setView = useDashboard((s) => s.setView);
	const filtersOpen = useDashboard((s) => s.filtersOpen);
	const setFiltersOpen = useDashboard((s) => s.setFiltersOpen);
	const setFormMode = useDashboard((s) => s.setFormMode);
	const setImportOpen = useDashboard((s) => s.setImportOpen);
	const toggleStatus = useDashboard((s) => s.toggleStatus);
	const setFilters = useDashboard((s) => s.setFilters);
	const groupBy = useDashboard((s) => s.groupBy);
	const setGroupBy = useDashboard((s) => s.setGroupBy);
	const resetSample = useDashboard((s) => s.resetSample);
	const profileOpen = useDashboard((s) => s.profileOpen);
	const [mobileFilters, setMobileFilters] = (0, import_react.useState)(false);
	const rows = (0, import_react.useMemo)(() => applyFilters(accounts, filters, search), [
		accounts,
		filters,
		search
	]);
	const kpis = (0, import_react.useMemo)(() => computeKpis(rows), [rows]);
	const insights = (0, import_react.useMemo)(() => computeInsights(rows), [rows]);
	function focusIds(ids) {
		const subset = accounts.filter((a) => ids.includes(a.id));
		const statuses = Array.from(new Set(subset.map((a) => a.status)));
		setFilters({ statuses });
		setSearch("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex shrink-0 flex-wrap items-center gap-2 border-b px-3 py-2.5 md:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mr-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-xl leading-none tracking-tight",
							children: "Siteline"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 hidden text-xs text-muted-foreground sm:block",
							children: "Pipeline account intelligence"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-w-0 flex-1 md:max-w-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: search,
							onChange: (e) => setSearch(e.target.value),
							placeholder: "Search client, site, city, owner…",
							className: "pl-9"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center rounded-full bg-muted p-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setView("table"),
							className: "inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-sm",
							style: view === "table" ? {
								background: "var(--color-card)",
								boxShadow: "var(--shadow-border)"
							} : void 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table2, { className: "size-3.5" }), "Table"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setView("map"),
							className: "inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-sm",
							style: view === "map" ? {
								background: "var(--color-card)",
								boxShadow: "var(--shadow-border)"
							} : void 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map$1, { className: "size-3.5" }), "Map"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "hidden sm:inline-flex",
						onClick: () => setFormMode("create"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Add account"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "hidden sm:inline-flex",
						onClick: () => setImportOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }), "Upload"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "icon",
						className: "lg:hidden",
						onClick: () => setMobileFilters(true),
						"aria-label": "Filters",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "More",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => setFormMode("create"),
								children: "Add account"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => setImportOpen(true),
								children: "Upload Excel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onClick: () => downloadBlob(exportWorkbook(rows, kitchens), "siteline-pipeline.xlsx"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "Export filtered"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => setFiltersOpen(!filtersOpen),
								children: filtersOpen ? "Hide filters" : "Show filters"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: resetSample,
								children: "Reset sample data"
							})
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shrink-0 space-y-3 px-3 py-3 md:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiBar, { kpis }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusLegend, {
						selected: filters.statuses,
						onToggle: toggleStatus
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightsPanel, {
						insights,
						onFocus: focusIds
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1 gap-3 px-3 pb-3 md:px-5",
				children: [filtersOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden w-64 shrink-0 lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-lg bg-card p-3 shadow-[var(--shadow-border)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPanel, { all: accounts })
					})
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "relative min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular font-medium text-foreground",
										children: rows.length
									}),
									" of",
									" ",
									accounts.length,
									" sites"
								]
							}), view === "table" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: ["Group by", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NativeSelect, {
									className: "h-8 w-40",
									value: groupBy,
									onChange: (e) => setGroupBy(e.target.value),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "None"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "status",
											children: "Status"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "city",
											children: "City"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "state",
											children: "State"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "owner",
											children: "Owner"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "industry",
											children: "Industry"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "businessType",
											children: "Business type"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "pipelineFy",
											children: "Pipeline FY"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "kitchenId",
											children: "Central kitchen"
										})
									]
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Click a marker for the full profile. Toggle CPU links to test operational reach."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-[calc(100%-2.25rem)] min-h-[420px]",
							children: view === "table" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountTable, { rows }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPane, { rows })
						}),
						profileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountProfile, {}) : null
					]
				})]
			}),
			mobileFilters ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute inset-0 bg-foreground/40",
					"aria-label": "Close filters",
					onClick: () => setMobileFilters(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-y-0 left-0 w-[min(100%,20rem)] bg-card p-4 shadow-[var(--shadow-border)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterPanel, { all: accounts })
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountForm, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExcelImport, {})
		]
	});
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { nearestSites as a, STATUS_META as c, useDashboard as i, AccountHoverCard as n, INDIA_CENTER as o, StatusDot as r, RADIUS_OPTIONS as s, routes_exports as t };
