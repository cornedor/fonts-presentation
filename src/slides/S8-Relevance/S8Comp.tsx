import styled from "@emotion/styled";
import { MoveIn } from "../../animations/MoveIn";
import { FontWeights, Text } from "../../components/Text";

const What = styled(Text)`
  position: absolute;
  width: 415px;
  height: 49px;
  left: 305px;
  top: 359px;
  color: #000000;
`;

export function S8Comp({ visible }: { visible: boolean }) {
  return (
    <>
      <MoveIn visible={visible}>
        <What font="Montserrat" size={40} weight={FontWeights.Bold}>
          is dat nog relevant?
        </What>
      </MoveIn>
    </>
  );
}
