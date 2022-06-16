import { ReactNode } from "react";

export enum FontWeights {
  Thin = 100,
  ExtraLight = 200,
  Light = 300,
  Regular = 400,
  Medium = 500,
  SemiBold = 600,
  Bold = 700,
  ExtraBold = 800,
  Black = 900,
}

interface TextProps {
  font: "Montserrat" | "EB Garamond";
  size: number;
  italic?: boolean;
  weight: FontWeights;
  children: ReactNode;
  className?: string;
}

export function Text({
  font,
  size,
  weight,
  italic,
  children,
  className,
}: TextProps) {
  return (
    <span
      className={className}
      style={{
        fontFamily: font,
        fontSize: size,
        fontWeight: weight,
        fontStyle: italic ? "italic" : "normal",
      }}
    >
      {children}
    </span>
  );
}
