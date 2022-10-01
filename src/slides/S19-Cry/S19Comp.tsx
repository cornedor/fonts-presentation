import styled from "@emotion/styled";
import { MoveIn } from "../../animations/MoveIn";
import { FontWeights, Text } from "../../components/Text";

const image = require("./slide19.jpg");

const What = styled(Text)`
  position: absolute;

  left: 324px;
  top: 671px;
`;
const Title = styled(Text)`
  position: absolute;
  left: 304px;
  top: 570px;
`;

const Slide = styled.div`
  background: url(${image});
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export function S19Comp({ visible }: { visible: boolean }) {
  return (
    <Slide>
      <MoveIn visible={visible} delay={1600}>
        <What font="Montserrat" size={40} weight={FontWeights.Bold}>
          De f & i staan in 1 vakje
        </What>
      </MoveIn>
      <MoveIn visible={visible}>
        <Title
          font="EB Garamond"
          size={100}
          weight={FontWeights.SemiBold}
          italic
        >
          Jamaar
        </Title>
      </MoveIn>
    </Slide>
  );
}
