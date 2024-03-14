export interface TextGradientProps {
  text: string;
  animation?: "linear" | "ease-in-out" | "ease-in";
  type?:
    | "linear"
    | "radial"
    | "elliptical"
    | "repeat-linear"
    | "repeat-radial"
    | "repeat-elliptical";
  color1: string;
  color2: string;
  startPosition?: string | number;
  endPosition?: string | number;
  style?: object;
}

export interface DefaultStyleProps {
  backgroundImage: string;
  WebkitBackgroundClip: string;
  WebkitTextFillColor: string;
  fontSize: string;
  fontWeight: number;
  style?: any;
}
