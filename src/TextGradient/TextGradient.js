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
var TextGradient = function (_a) {
    var text = _a.text, type = _a.type, color1 = _a.color1, color2 = _a.color2, startPosition = _a.startPosition, _b = _a.endPosition, endPosition = _b === void 0 ? "100" : _b, style = _a.style;
    var styleByType = function () {
        switch (type) {
            case "linear":
                return "linear-gradient(".concat(color1, " ").concat(startPosition, "%, ").concat(color2, " ").concat(endPosition, "%)");
            case "radial":
                return "radial-gradient(".concat(color1, " ").concat(startPosition, "%, ").concat(color2, " ").concat(endPosition, "%)");
            case "elliptical":
                return "radial-gradient(ellipse farthest-side at top right, ".concat(color1, " ").concat(startPosition, "%, ").concat(color2, " ").concat(endPosition, "%)");
            case "repeat-linear":
                return "repeating-linear-gradient(to right, ".concat(color1, " ").concat(startPosition, "%, ").concat(color2, " 100%)");
            case "repeat-radial":
                return "repeating-radial-gradient(circle farthest-side at top right,".concat(color1, " ").concat(startPosition, "%, ").concat(color2, " ").concat(endPosition, "%)");
            case "repeat-elliptical":
                return "repeating-radial-gradient(ellipse farthest-side at top right, ".concat(color1, " ").concat(startPosition, "%, ").concat(color2, " ").concat(endPosition, "%)");
            default:
                return "linear-gradient(".concat(color1, " ").concat(startPosition, "%, ").concat(color2, " ").concat(endPosition, "%)");
        }
    };
    var defaultStyle = __assign({ backgroundImage: styleByType(), WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: "80px", fontWeight: 700 }, style);
    return react_1.default.createElement("span", { style: defaultStyle }, text);
};
exports.default = TextGradient;
