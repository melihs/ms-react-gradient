import { TextGradientProps } from "../TextGradient/types";

const useTextGradient = (props: TextGradientProps) => {
  const {
    type,
    color1,
    color2,
    animation,
    startPosition = "0",
    endPosition = "100",
  }: TextGradientProps = props;

  const styleByType = (): string => {
    switch (type) {
      case "linear":
        return `linear-gradient(${color1} ${startPosition}%, ${color2} ${endPosition}%)`;
      case "radial":
        return `radial-gradient(${color1} ${startPosition}%, ${color2} ${endPosition}%)`;
      case "elliptical":
        return `radial-gradient(ellipse farthest-side at top right, ${color1} ${startPosition}%, ${color2} ${endPosition}%)`;
      case "repeat-linear":
        return `repeating-linear-gradient(to right, ${color1} ${startPosition}%, ${color2} 100%)`;
      case "repeat-radial":
        return `repeating-radial-gradient(circle farthest-side at top right,${color1} ${startPosition}%, ${color2} ${endPosition}%)`;
      case "repeat-elliptical":
        return `repeating-radial-gradient(ellipse farthest-side at top right, ${color1} ${startPosition}%, ${color2} ${endPosition}%)`;
      default:
        return `linear-gradient(${color1} ${startPosition}%, ${color2} ${endPosition}%)`;
    }
  };

  const classNames = () => {
    switch (animation) {
      case "linear":
        return "defaultText linear";
      case "ease-in-out":
        return "defaultText easeInOut";
      case "ease-in":
        return "defaultText easeIn";
    }
  };

  return { styleByType, classNames };
};

export default useTextGradient;
