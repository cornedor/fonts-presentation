import styled from "@emotion/styled";
import { FontWeights, Text } from "../../components/Text";

const What = styled(Text)`
  position: absolute;
  left: 225px;
  top: 360px;
  color: #000000;
`;

export function S21Comp({ visible }: { visible: boolean }) {
  return (
    <>
      <What font="Montserrat" size={40} weight={FontWeights.Bold}>
        maar terug naar de stijlen...
      </What>
    </>
  );
}
