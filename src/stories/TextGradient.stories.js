"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepeatRadial = exports.RepeatLinear = exports.Elliptical = exports.Radial = exports.Linear = void 0;
var TextGradient_1 = __importDefault(require("../TextGradient/TextGradient"));
exports.default = {
    component: TextGradient_1.default,
};
exports.Linear = {
    args: {
        color1: "#121fcf",
        color2: "#13cf50",
        startPosition: "0",
        endPosition: "100",
        type: "linear",
        text: "Linear gradient text",
    },
    argTypes: {
        color1: { control: "color" },
        color2: { control: "color" },
    },
};
exports.Radial = {
    args: {
        style: "",
        color1: "#121fcf",
        color2: "#13cf50",
        startPosition: "0",
        endPosition: "100",
        type: "radial",
        text: "Radial gradient text",
    },
    argTypes: {
        color1: { control: "color" },
        color2: { control: "color" },
    },
};
exports.Elliptical = {
    args: {
        style: "",
        color1: "#121fcf",
        color2: "#13cf50",
        startPosition: "0",
        endPosition: "100",
        type: "elliptical",
        text: "Elliptical gradient text",
    },
    argTypes: {
        color1: { control: "color" },
        color2: { control: "color" },
    },
};
exports.RepeatLinear = {
    args: {
        style: "",
        color1: "#121fcf",
        color2: "#13cf50",
        startPosition: "0",
        endPosition: "100",
        type: "repeat-linear",
        text: "Repeat linear gradient text",
    },
    argTypes: {
        color1: { control: "color" },
        color2: { control: "color" },
    },
};
exports.RepeatRadial = {
    args: {
        style: "",
        color1: "#121fcf",
        color2: "#13cf50",
        startPosition: "0",
        endPosition: "100",
        type: "repeat-radial",
        text: "Repeat radial gradient text",
    },
    argTypes: {
        color1: { control: "color" },
        color2: { control: "color" },
    },
};
