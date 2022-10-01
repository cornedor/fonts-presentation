import styled from "@emotion/styled";
import { MoveIn } from "../../animations/MoveIn";
import { FontWeights, Text } from "../../components/Text";

const What = styled(Text)`
  position: absolute;

  left: 186px;
  top: 410px;
`;
const Title = styled(Text)`
  position: absolute;

  left: 242px;
  top: 309px;
`;

export function S14Comp({ visible }: { visible: boolean }) {
  return (
    <>
      <MoveIn visible={visible} delay={1600}>
        <What font="Montserrat" size={40} weight={FontWeights.Bold}>
          Jij kan goed vakjes tekenen.
        </What>
      </MoveIn>
      <MoveIn visible={visible}>
        <Title
          font="EB Garamond"
          size={100}
          weight={FontWeights.SemiBold}
          italic
        >
          Zo hé!?
        </Title>
      </MoveIn>
    </>
  );
}
