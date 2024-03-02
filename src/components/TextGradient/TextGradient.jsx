export const TextGradient = ({text, type, color1, color2, startPosition, endPosition = "100", style}) => {
  const styleByType = () => {
    switch (type) {
      case "linear":
        return `linear-gradient(${color1} ${startPosition}%, ${color2} ${endPosition}%)`
      case "radial":
        return `radial-gradient(${color1} ${startPosition}%, ${color2} ${endPosition}%)`
      case "elliptical":
        return `radial-gradient(ellipse farthest-side at top right, ${color1} ${startPosition}%, ${color2} ${endPosition}%)`
      case "repeat-linear":
        return `repeating-linear-gradient(to right, ${color1} ${startPosition}%, ${color2} 100%)`
      case "repeat-radial":
        return `repeating-radial-gradient(circle farthest-side at top right,${color1} ${startPosition}%, ${color2} ${endPosition}%)`
      case "repeat-elliptical":
        return `repeating-radial-gradient(ellipse farthest-side at top right, ${color1} ${startPosition}%, ${color2} ${endPosition}%)`
      default:
        return `linear-gradient(${color1} ${startPosition}%, ${color2} ${endPosition}%)`
    }
  }

  const defaultStyle = {
    backgroundImage: styleByType(),
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: "80px",
    fontWeight: 700,
    ...style
  };

  return <span style={defaultStyle}>{text}</span>
}
