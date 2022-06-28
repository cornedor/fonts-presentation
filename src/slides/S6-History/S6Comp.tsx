import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { FontWeights, Text } from "../../components/Text";
import { config } from "../../config";

const image = require("./Slide6.jpg");
const specimen = require("./Specimen.png");
const gutenberg = require("./Gutenberg.png");

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: ${config.width}px;
  height: ${config.height}px;
  object-fit: contain;
`;

const kf = keyframes`
  0% {
    transform: rotateX(49deg) translateX(576px);
  }
  100% {
    transform: rotateX(0deg) translateX(0px);
  }
`;

const Specimen = styled(Image)`
  position: absolute;
  left: 536px;
  top: 61px;
  width: 453px;
  height: 584px;

  animation: ${kf} 2s ease;
  animation-fill-mode: both;
`;
const gkf = keyframes`
    0% {
      transform: rotateX(49deg) translateX(576px) rotateZ(2deg);
    }
    100% {
      transform: rotateX(0deg) translateX(0px) rotateZ(2deg);
    }
  `;
const Gutenberg = styled(Image)`
  position: absolute;
  width: 425px;
  height: 592px;
  left: 575.23px;
  top: 38.25px;

  animation: ${gkf} 2s ease;
  animation-delay: 1000ms;
  animation-fill-mode: both;
`;

const Slide = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  perspective: 1328px;
`;

const down = keyframes`
  0% {
    transform: translateY(-80px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    transform: translateY(0px);
  }
`;

const Subtext = styled(Text)`
  position: absolute;
  display: block;
  text-align: center;
  width: 357px;
  height: 52px;
  left: 584px;
  top: 645px;

  animation: ${down} 1s ease;
  animation-delay: 1800ms;
  animation-fill-mode: both;
`;

export const S6Comp = ({ visible }: { visible: boolean }) => (
  <Slide>
    <Image src={image} alt="" />

    <Gutenberg src={gutenberg} alt="" />

    {visible && (
      <>
        <Subtext font={"EB Garamond"} size={20} weight={FontWeights.SemiBold}>
          Printed by William Caslon, letter founder; from the 1728 Cyclopaedia.
        </Subtext>

        <Specimen src={specimen} alt="" />
      </>
    )}
  </Slide>
);
