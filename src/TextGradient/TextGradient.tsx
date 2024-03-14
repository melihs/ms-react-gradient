import React from "react";
import useTextGradient from "../hooks/useTextGradient";
import { DefaultStyleProps, TextGradientProps } from "./types";
import "./styles.css";

const TextGradient = (props: TextGradientProps) => {
  const { styleByType, classNames } = useTextGradient({ ...props });

  const defaultStyle: DefaultStyleProps = {
    backgroundImage: styleByType(),
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "80px",
    fontWeight: 700,
    ...props?.style,
  };

  return (
    <span className={classNames()} style={defaultStyle}>
      {props?.text}
    </span>
  );
};

export default TextGradient;
