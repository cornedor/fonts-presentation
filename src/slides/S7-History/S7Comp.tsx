import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const image7 = require("./image7.png");
const image8 = require("./image8.png");
const image9 = require("./image9.png");
const image10 = require("./image10.png");

const kf1 = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;
const kf2 = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: contain;
`;

const Image7 = styled(Image)`
  width: 582px;
  height: 768px;
  animation: ${kf1} 1s ease-out 2s;
  animation-fill-mode: both;
`;
const Image8 = styled(Image)`
  left: 582px;
  width: 442px;
  height: 323px;

  animation: ${kf2} 1s ease-out 2.5s;
  animation-fill-mode: both;
`;
const Image9 = styled(Image)`
  width: 442px;
  height: 178px;
  left: 582px;
  top: 323px;

  animation: ${kf2} 1s ease-out 3s;
  animation-fill-mode: both;
`;
const Image10 = styled(Image)`
  width: 442px;
  height: 267px;
  left: 582px;
  top: 501px;

  animation: ${kf2} 1s ease-out 3.5s;
  animation-fill-mode: both;
`;

const Slide = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
`;
const Frame = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  transform: scaleX(1);
`;

export const S7Comp = ({ visible }: { visible: boolean }) => (
  <Slide>
    <Frame>
      <Image7 src={image7} alt="" />
      <Image8 src={image8} alt="" />
      <Image9 src={image9} alt="" />
      <Image10 src={image10} alt="" />
    </Frame>
  </Slide>
);
