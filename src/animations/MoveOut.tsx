import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const kf = keyframes`
  from {
    transform: translateX(0px);
    opacity: 1;
  }
  to {
    transform: translateX(-200px);
    opacity: 0;
  }
`;

export const MoveOut = styled.div<{
  visible: boolean;
  delay?: number;
  speed?: number;
}>`
  transform: translateX(0px);
  opacity: 1;

  ${(props) =>
    !props.visible &&
    css`
      animation: ${kf} ${props.speed ?? 2000}ms ease-out;
      animation-fill-mode: both;
      animation-delay: ${props.delay}ms;
    `}
`;
