import styled from "@emotion/styled";
import { MoveIn } from "../../animations/MoveIn";
import { FontWeights, Text } from "../../components/Text";

const image = require("./slide38.jpg");

const Complicated = styled(Text)`
  position: absolute;

  left: 139px;
  top: 211px;
`;

const Slide = styled.div`
  background: url(${image});
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const Screenshot = styled.img`
  position: absolute;
  width: 1047px;
  height: 679px;
  left: -12px;
  top: 44px;
  object-fit: contain;
`;

export function S28Comp({ visible }: { visible: boolean }) {
  return (
    <Slide>
      <MoveIn visible={true}>
        <Complicated font="Montserrat" size={90} weight={FontWeights.Bold}>
          its cꙮmplicated
        </Complicated>
      </MoveIn>
      <MoveIn visible={visible}>
        <Screenshot src={require("./image20.png")} />
      </MoveIn>
    </Slide>
  );
}
