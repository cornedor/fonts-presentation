import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const image1 = require("./img1.png");
const image2 = require("./img2.png");
const image3 = require("./img3.png");

const kf1 = keyframes`
  0% {
    transform: rotate(2deg);
  }
  20% {
    transform: rotate(-2deg);
  }
  34% {
    transform: rotate(-1deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  67% {
    transform: rotate(-2deg);
  }
  70% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(2deg);
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: contain;
`;

const Words = styled(Image)`
  width: 702.71px;
  height: 207.03px;
  left: 159.33px;
  top: 153.9px;

  transform: rotate(-5.33deg);
`;
const Stain = styled(Image)`
  width: 351px;
  height: 301px;
  left: 47px;
  top: 64px;
`;
const Hand = styled(Image)`
  width: 700px;
  height: 350px;
  left: 324px;
  top: 309px;

  mix-blend-mode: multiply;

  animation: ${kf1} 5s ease;
  animation-iteration-count: infinite;
  transform-origin: center right;
  translate: 10px 0;
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

export const S15Comp = ({ visible }: { visible: boolean }) => (
  <Slide>
    <Frame>
      <Stain src={image3} alt="" />
      <Words src={image1} alt="" />
      <Hand src={image2} alt="" />
    </Frame>
  </Slide>
);
