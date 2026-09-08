import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "./@floating-ui/react-dom+[...].mjs";
import { a as createElementObject, c as createLeafletContext, d as updateCircle, i as createTileLayerComponent, l as extendContext, n as createOverlayComponent, o as withPane, r as createPathComponent, s as LeafletContext, t as updateGridLayer, u as useLeafletContext } from "./react-leaflet__core.mjs";
import { t as require_leaflet_src } from "./leaflet.mjs";
//#region node_modules/react-leaflet/lib/hooks.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function useMap() {
	return useLeafletContext().map;
}
//#endregion
//#region node_modules/react-leaflet/lib/CircleMarker.js
var import_leaflet_src = require_leaflet_src();
var CircleMarker = createPathComponent(function createCircleMarker({ center, children: _c, ...options }, ctx) {
	const marker = new import_leaflet_src.CircleMarker(center, options);
	return createElementObject(marker, extendContext(ctx, { overlayContainer: marker }));
}, updateCircle);
//#endregion
//#region node_modules/react-leaflet/lib/MapContainer.js
function MapContainerComponent({ bounds, boundsOptions, center, children, className, id, placeholder, style, whenReady, zoom, ...options }, forwardedRef) {
	const [props] = (0, import_react.useState)({
		className,
		id,
		style
	});
	const [context, setContext] = (0, import_react.useState)(null);
	const mapInstanceRef = (0, import_react.useRef)(void 0);
	(0, import_react.useImperativeHandle)(forwardedRef, () => context?.map ?? null, [context]);
	const mapRef = (0, import_react.useCallback)((node) => {
		if (node !== null && !mapInstanceRef.current) {
			const map = new import_leaflet_src.Map(node, options);
			mapInstanceRef.current = map;
			if (center != null && zoom != null) map.setView(center, zoom);
			else if (bounds != null) map.fitBounds(bounds, boundsOptions);
			if (whenReady != null) map.whenReady(whenReady);
			setContext(createLeafletContext(map));
		}
	}, []);
	(0, import_react.useEffect)(() => {
		return () => {
			context?.map.remove();
		};
	}, [context]);
	const contents = context ? /*#__PURE__*/ import_react.createElement(LeafletContext, { value: context }, children) : placeholder ?? null;
	return /*#__PURE__*/ import_react.createElement("div", {
		...props,
		ref: mapRef
	}, contents);
}
var MapContainer = /*#__PURE__*/ (0, import_react.forwardRef)(MapContainerComponent);
//#endregion
//#region node_modules/react-leaflet/lib/Polyline.js
var Polyline = createPathComponent(function createPolyline({ positions, ...options }, ctx) {
	const polyline = new import_leaflet_src.Polyline(positions, options);
	return createElementObject(polyline, extendContext(ctx, { overlayContainer: polyline }));
}, function updatePolyline(layer, props, prevProps) {
	if (props.positions !== prevProps.positions) layer.setLatLngs(props.positions);
});
//#endregion
//#region node_modules/react-leaflet/lib/TileLayer.js
var TileLayer = createTileLayerComponent(function createTileLayer({ url, ...options }, context) {
	const layer = new import_leaflet_src.TileLayer(url, withPane(options, context));
	return createElementObject(layer, context);
}, function updateTileLayer(layer, props, prevProps) {
	updateGridLayer(layer, props, prevProps);
	const { url } = props;
	if (url != null && url !== prevProps.url) layer.setUrl(url);
});
//#endregion
//#region node_modules/react-leaflet/lib/Tooltip.js
var Tooltip = createOverlayComponent(function createTooltip(props, context) {
	const tooltip = new import_leaflet_src.Tooltip(props, context.overlayContainer);
	return createElementObject(tooltip, context);
}, function useTooltipLifecycle(element, context, { position }, setOpen) {
	(0, import_react.useEffect)(function addTooltip() {
		const container = context.overlayContainer;
		if (container == null) return;
		const { instance } = element;
		const onTooltipOpen = (event) => {
			if (event.tooltip === instance) {
				if (position != null) instance.setLatLng(position);
				instance.update();
				setOpen(true);
			}
		};
		const onTooltipClose = (event) => {
			if (event.tooltip === instance) setOpen(false);
		};
		container.on({
			tooltipopen: onTooltipOpen,
			tooltipclose: onTooltipClose
		});
		container.bindTooltip(instance);
		return function removeTooltip() {
			container.off({
				tooltipopen: onTooltipOpen,
				tooltipclose: onTooltipClose
			});
			if (container._map != null) container.unbindTooltip();
		};
	}, [
		element,
		context,
		setOpen,
		position
	]);
});
//#endregion
export { CircleMarker as a, MapContainer as i, TileLayer as n, useMap as o, Polyline as r, Tooltip as t };
