import TextGradient from "../TextGradient/TextGradient";

export default {
  component: TextGradient,
};

export const Linear = {
  args: {
    color1: "#121fcf",
    color2: "#13cf50",
    startPosition: "0",
    endPosition: "100",
    type: "linear",
    text: "Linear gradient text",
  },
  argTypes: {
    animation: {
      control: "select",
      options: ["linear", "ease-in-out", "ease-in"],
    },
    type: {
      control: "select",
      options: [
        "linear",
        "radial",
        "elliptical",
        "repeat-linear",
        "repeat-radial",
        "repeat-elliptical",
      ],
    },
    color1: { control: "color" },
    color2: { control: "color" },
  },
};

export const Radial = {
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
    animation: {
      control: "select",
      options: ["linear", "ease-in-out", "ease-in"],
    },
    type: {
      control: "select",
      options: [
        "linear",
        "radial",
        "elliptical",
        "repeat-linear",
        "repeat-radial",
        "repeat-elliptical",
      ],
    },
    color1: { control: "color" },
    color2: { control: "color" },
  },
};

export const Elliptical = {
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
    animation: {
      control: "select",
      options: ["linear", "ease-in-out", "ease-in"],
    },
    type: {
      control: "select",
      options: [
        "linear",
        "radial",
        "elliptical",
        "repeat-linear",
        "repeat-radial",
        "repeat-elliptical",
      ],
    },
    color1: { control: "color" },
    color2: { control: "color" },
  },
};

export const RepeatLinear = {
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
    animation: {
      control: "select",
      options: ["linear", "ease-in-out", "ease-in"],
    },
    type: {
      control: "select",
      options: [
        "linear",
        "radial",
        "elliptical",
        "repeat-linear",
        "repeat-radial",
        "repeat-elliptical",
      ],
    },
    color1: { control: "color" },
    color2: { control: "color" },
  },
};

export const RepeatRadial = {
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
    animation: {
      control: "select",
      options: ["linear", "ease-in-out", "ease-in"],
    },
    type: {
      control: "select",
      options: [
        "linear",
        "radial",
        "elliptical",
        "repeat-linear",
        "repeat-radial",
        "repeat-elliptical",
      ],
    },
    color1: { control: "color" },
    color2: { control: "color" },
  },
};

export const withAnimation = {
  args: {
    style: "",
    color1: "#121fcf",
    color2: "#13cf50",
    startPosition: "0",
    endPosition: "100",
    animation: "linear",
    type: "repeat-radial",
    text: "Repeat radial gradient text",
  },
  argTypes: {
    animation: {
      control: "select",
      options: ["linear", "ease-in-out", "ease-in"],
    },
    type: {
      control: "select",
      options: [
        "linear",
        "radial",
        "elliptical",
        "repeat-linear",
        "repeat-radial",
        "repeat-elliptical",
      ],
    },
    color1: { control: "color" },
    color2: { control: "color" },
  },
};
