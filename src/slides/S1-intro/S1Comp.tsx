import styled from "@emotion/styled";
import { MoveIn } from "../../animations/MoveIn";
import { FontWeights, Text } from "../../components/Text";

const What = styled(Text)`
  position: absolute;
  left: 282px;
  top: 302px;
`;
const Title = styled(Text)`
  position: absolute;
  left: 282px;
  top: 336px;
`;

export function S1Comp({ visible }: { visible: boolean }) {
  return (
    <>
      <MoveIn visible={visible}>
        <What font="Montserrat" size={40} weight={FontWeights.Bold}>
          mijn presentatie over
        </What>
      </MoveIn>
      <MoveIn visible={visible} delay={400}>
        <Title
          font="EB Garamond"
          size={100}
          weight={FontWeights.SemiBold}
          italic
        >
          Lettertypetjes
        </Title>
      </MoveIn>
    </>
  );
}
