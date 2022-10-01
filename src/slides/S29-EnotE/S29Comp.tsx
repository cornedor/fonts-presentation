import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const Title = styled.div`
  font-family: "Source Sans Pro", "Noto Sans";
  font-weight: 700;
  font-size: 90px;

  position: absolute;

  left: 173px;
  top: 50px;
`;

const kf = keyframes`
  0% {
    translate: -10px 10px
  }
  50% {
    translate: 10px -10px
  }
  100% {
    translate: -10px 10px
  }
`;

const E1 = styled.div`
  font-family: "Source Sans Pro";
  font-weight: 700;
  position: absolute;
  left: 383px;
  top: 104px;

  font-size: 584px;
  color: #f00;
  mix-blend-mode: multiply;
`;

const E2 = styled.div`
  font-family: "Noto Sans";
  font-weight: 700;
  position: absolute;
  left: 377px;
  top: 123px;
  font-size: 520px;

  color: #064cff;
  mix-blend-mode: multiply;

  animation: ${kf} 2s ease;
  animation-iteration-count: infinite;
`;

export function S29Comp() {
  return (
    <div>
      <Title>ễ wel maar ɇ niet</Title>
      <E1>ễ</E1>
      <E2>ɇ</E2>
    </div>
  );
}
