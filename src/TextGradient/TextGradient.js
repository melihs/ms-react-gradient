"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useTextGradient_1 = __importDefault(require("../hooks/useTextGradient"));
require("./styles.css");
var TextGradient = function (props) {
    var _a = (0, useTextGradient_1.default)(__assign({}, props)), styleByType = _a.styleByType, classNames = _a.classNames;
    var defaultStyle = __assign({ backgroundImage: styleByType(), WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "80px", fontWeight: 700 }, props === null || props === void 0 ? void 0 : props.style);
    return (react_1.default.createElement("span", { className: classNames(), style: defaultStyle }, props === null || props === void 0 ? void 0 : props.text));
};
exports.default = TextGradient;
