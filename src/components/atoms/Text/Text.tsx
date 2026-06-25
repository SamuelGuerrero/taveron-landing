import type { CSSProperties, ElementType, ReactNode } from "react";

type FontWeight =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

type FontSize = number | string;

interface TextProps {
  children: ReactNode;
  weight?: FontWeight;
  size?: FontSize;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

const weightMap: Record<string, number> = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

export function Text({
  children,
  weight = 400,
  size = 16,
  as: Tag = "p",
  className,
  style,
}: TextProps) {
  const fontWeight =
    typeof weight === "string" ? (weightMap[weight] ?? 400) : weight;
  const fontSize = typeof size === "number" ? `${size}px` : size;

  return (
    <Tag className={className} style={{ fontWeight, fontSize, ...style }}>
      {children}
    </Tag>
  );
}
