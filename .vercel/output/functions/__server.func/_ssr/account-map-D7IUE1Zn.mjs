import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { a as nearestSites, c as STATUS_META, i as useDashboard, n as AccountHoverCard, o as INDIA_CENTER, r as StatusDot, s as RADIUS_OPTIONS } from "./routes-AvT6LAuR.mjs";
import { a as CircleMarker, i as MapContainer, n as TileLayer, o as useMap, r as Polyline, t as Tooltip } from "../_libs/react-leaflet.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-map-D7IUE1Zn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AccountMap({ rows }) {
	const accounts = useDashboard((s) => s.accounts);
	const kitchens = useDashboard((s) => s.kitchens);
	useDashboard((s) => s.selectedId);
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
	const cpuLines = (0, import_react.useMemo)(() => {
		if (!showCpuLinks) return [];
		return rows.flatMap((r) => {
			const k = kitchens.find((x) => x.id === r.kitchenId);
			if (!k || !r.lat || !r.lng) return [];
			return [{
				from: r,
				to: k
			}];
		});
	}, [
		showCpuLinks,
		rows,
		kitchens
	]);
	const points = rows.filter((r) => Number.isFinite(r.lat) && Number.isFinite(r.lng) && r.lat !== 0).map((r) => [r.lat, r.lng]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full min-h-[420px] overflow-hidden rounded-lg bg-card shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MapContainer, {
			center: INDIA_CENTER,
			zoom: 5,
			className: "h-full w-full",
			scrollWheelZoom: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileLayer, {
					attribution: "© <a href=\"https://www.openstreetmap.org/copyright\">OSM</a> © <a href=\"https://carto.com/attributions\">CARTO</a>",
					url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FitPoints, {
					points,
					signature: rows.map((r) => r.id).join(",")
				}),
				cpuLines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Polyline, {
					positions: [[l.from.lat, l.from.lng], [l.to.lat, l.to.lng]],
					pathOptions: {
						color: "#1f4d3a",
						weight: 1.25,
						opacity: .45,
						dashArray: "4 6"
					}
				}, `cpu-${l.from.id}`)),
				origin ? nearest.map((n) => {
					const target = accounts.find((a) => a.id === n.id);
					if (!target) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Polyline, {
						positions: [[origin.lat, origin.lng], [target.lat, target.lng]],
						pathOptions: {
							color: "#1f4d3a",
							weight: 2,
							opacity: .7
						}
					}, `near-${n.id}`);
				}) : null,
				kitchens.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleMarker, {
					center: [k.lat, k.lng],
					radius: 9,
					pathOptions: {
						color: "#1f4d3a",
						fillColor: "#1f4d3a",
						fillOpacity: .15,
						weight: 2
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						direction: "top",
						offset: [0, -8],
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium",
							children: k.name
						})
					})
				}, k.id)),
				rows.map((r) => {
					if (!Number.isFinite(r.lat) || !Number.isFinite(r.lng) || r.lat === 0) return null;
					const meta = STATUS_META[r.status];
					const isOrigin = origin?.id === r.id;
					const isNear = nearestIds.has(r.id);
					const dim = origin ? !isOrigin && !isNear : false;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleMarker, {
						center: [r.lat, r.lng],
						radius: isOrigin ? 12 : isNear ? 9 : 7,
						pathOptions: {
							color: meta.hex,
							fillColor: meta.hex,
							fillOpacity: dim ? .2 : .9,
							weight: isOrigin ? 3 : 1.5,
							opacity: dim ? .35 : 1
						},
						eventHandlers: {
							click: () => setSelected(r.id, true),
							mouseover: () => setHovered(r.id),
							mouseout: () => setHovered(null)
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
							className: "atlas-tip",
							direction: "top",
							offset: [0, -10],
							opacity: 1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountHoverCard, {
								account: r,
								kitchen: kitchens.find((k) => k.id === r.kitchenId)
							})
						})
					}, r.id);
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute top-3 left-3 z-[400] max-w-[calc(100%-1.5rem)] space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2 rounded-lg bg-card/95 p-2 shadow-[var(--shadow-border)] backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 px-1 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: showCpuLinks,
						onChange: (e) => setShowCpuLinks(e.target.checked)
					}), "CPU links"]
				}), origin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: "Radius"
				}), RADIUS_OPTIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setNearestRadius(r),
					className: "h-7 rounded-full px-2.5 text-xs",
					style: {
						background: nearestRadius === r ? "var(--color-primary)" : "var(--color-muted)",
						color: nearestRadius === r ? "var(--color-primary-foreground)" : "var(--color-foreground)"
					},
					children: [r, " km"]
				}, r))] }) : null]
			}), origin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-h-56 w-72 overflow-auto rounded-lg bg-card/95 p-3 shadow-[var(--shadow-border)] atlas-scroll",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Nearest sites"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-medium",
						children: [
							origin.clientName,
							" — ",
							origin.siteName
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-2 space-y-1.5",
						children: nearest.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-xs text-muted-foreground",
							children: [
								"None within ",
								nearestRadius,
								" km."
							]
						}) : nearest.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex w-full items-center justify-between gap-2 text-left text-xs",
							onClick: () => setSelected(n.id, true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex min-w-0 items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular text-muted-foreground",
										children: [i + 1, "."]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusDot, { status: n.status }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "truncate",
										children: [
											n.clientName,
											" — ",
											n.siteName
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular text-muted-foreground",
								children: [n.km.toFixed(1), " km"]
							})]
						}) }, n.id))
					})
				]
			}) : null]
		})]
	});
}
function FitPoints({ points, signature }) {
	const map = useMap();
	(0, import_react.useEffect)(() => {
		if (points.length === 0) {
			map.setView(INDIA_CENTER, 5);
			return;
		}
		if (points.length === 1) {
			map.setView(points[0], 11);
			return;
		}
		map.fitBounds(points, {
			padding: [36, 36],
			maxZoom: 11
		});
	}, [signature, map]);
	return null;
}
//#endregion
export { AccountMap };
