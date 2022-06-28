import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { MoveIn } from "../../animations/MoveIn";
import { MoveOut } from "../../animations/MoveOut";
import { config } from "../../config";

const image = require("./S4-Word.jpg");
const image2 = require("./Slide3.jpg");

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
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`;

const Party = styled(Image)`
  animation: ${kf} 2s linear;
  animation-iteration-count: infinite;
  animation-delay: 1700ms;
`;

const Slide = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Gif = styled.img`
  position: absolute;
  top: 360px;
  right: 10px;
`;

export const S4Comp = ({ visible }: { visible: boolean }) => (
  <Slide>
    <MoveOut visible={!visible} speed={400}>
      <Image src={image2} alt="" />
    </MoveOut>
    {visible && (
      <>
        <MoveIn visible={visible} delay={400} speed={400}>
          <Party src={image} alt="" />
        </MoveIn>
        <MoveIn visible={true} delay={1600} speed={400}>
          <Gif
            src="https://media.giphy.com/media/l0amJzVHIAfl7jMDos/giphy.gif"
            alt=""
          />
        </MoveIn>
      </>
    )}
  </Slide>
);
