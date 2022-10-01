import styled from "@emotion/styled";
import { MoveIn } from "../../animations/MoveIn";
import { FontWeights, Text } from "../../components/Text";

const What = styled(Text)`
  position: absolute;

  left: 324px;
  top: 391px;
`;
const Title = styled(Text)`
  position: absolute;

  left: 304px;
  top: 290px;
`;

export function S17Comp({ visible }: { visible: boolean }) {
  return (
    <>
      <MoveIn visible={visible} delay={1600}>
        <What font="Montserrat" size={40} weight={FontWeights.Bold}>
          Je hebt die vakjes helemaal
          <br />
          niet goed getekend!
        </What>
      </MoveIn>
      <MoveIn visible={visible}>
        <Title
          font="EB Garamond"
          size={100}
          weight={FontWeights.SemiBold}
          italic
        >
          Hahaha!
        </Title>
      </MoveIn>
    </>
  );
}
