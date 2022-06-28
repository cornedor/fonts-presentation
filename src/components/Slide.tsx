import styled from "@emotion/styled";
import { ReactNode } from "react";
import { config } from "../config";

const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: black;
`;

const Scaler = styled.section`
  width: ${config.width}px;
  height: ${config.height}px;
  min-width: ${config.width}px;
  min-height: ${config.height}px;
  max-width: ${config.width}px;
  max-height: ${config.height}px;
  background: wheat;
  transform: scale(${config.scale});
  position: relative;
  /* transform-origin: 0 0; */
`;

const colors = {
  white: "#fff",
  wheat: "#F5F0DF",
  red: "#FF0000",
};

export interface SlideProps {
  children: ReactNode;
  background: keyof typeof colors;
}

export function Slide({ children, background }: SlideProps) {
  return (
    <SlideWrapper>
      <Scaler style={{ backgroundColor: colors[background] }}>
        {children}
      </Scaler>
    </SlideWrapper>
  );
}
