import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const kf = keyframes`
  from {
    transform: translateX(200px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const MoveIn = styled.div<{ visible: boolean; delay?: number }>`
  transform: translateX(200px);
  opacity: 0;

  ${(props) =>
    props.visible &&
    css`
      animation: ${kf} 2s ease-out;
      animation-fill-mode: both;
      animation-delay: ${props.delay}ms;
    `}
`;
