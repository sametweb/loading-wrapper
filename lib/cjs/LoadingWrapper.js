"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var LoadingWrapperElement = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  filter: ", ";\n  opacity: ", ";\n  pointer-events: ", ";\n  user-select: ", ";\n"], ["\n  filter: ", ";\n  opacity: ", ";\n  pointer-events: ", ";\n  user-select: ", ";\n"])), function (props) { return "blur(" + props.blur + "px)"; }, function (props) { return props.opacity; }, function (props) { return (props.inactive ? "none" : "unset"); }, function (props) { return (props.inactive ? "none" : "unset"); });
var IndicatorWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ", ";\n  cursor: ", ";\n"], ["\n  position: absolute;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: ", ";\n  cursor: ", ";\n"])), function (props) { return props.overlay; }, function (props) { return props.cursor; });
var LoadingWrapper = function (props) {
    var children = props.children, _a = props.when, loading = _a === void 0 ? false : _a, _b = props.indicator, indicator = _b === void 0 ? null : _b, _c = props.blur, blur = _c === void 0 ? 2 : _c, _d = props.opacity, opacity = _d === void 0 ? 0.5 : _d, _e = props.inactive, inactive = _e === void 0 ? false : _e, _f = props.overlay, overlay = _f === void 0 ? "none" : _f, _g = props.cursor, cursor = _g === void 0 ? "default" : _g;
    if (loading) {
        return (react_1.default.createElement("div", { style: { position: "relative" } },
            indicator && (react_1.default.createElement(IndicatorWrapper, { overlay: overlay, cursor: cursor }, indicator)),
            react_1.default.createElement(LoadingWrapperElement, { blur: blur, opacity: opacity, inactive: inactive }, children)));
    }
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.default = LoadingWrapper;
var templateObject_1, templateObject_2;
