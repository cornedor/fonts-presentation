import styled from "@emotion/styled";
import { FontWeights, Text } from "../../components/Text";

const What = styled(Text)`
  position: absolute;
  width: 154px;
  height: 49px;
  left: 459px;
  top: 359px;
  color: #000000;
`;

export function S9Comp({ visible }: { visible: boolean }) {
  return (
    <>
      <What font="Montserrat" size={40} weight={FontWeights.Bold}>
        euhm...
      </What>
    </>
  );
}
