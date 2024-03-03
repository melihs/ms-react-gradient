export interface TextGradientProps {
  text?: string;
  type?: string;
  color1?: string;
  color2?: string;
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
