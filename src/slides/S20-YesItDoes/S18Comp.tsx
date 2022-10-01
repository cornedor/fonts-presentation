import styled from "@emotion/styled";
import { FontWeights, Text } from "../../components/Text";

const image1 = require("./image15.jpg");

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Image1 = styled(Image)`
  width: 450px;
  height: 635px;
  left: 484px;
  top: 66px;
`;

const Yes = styled(Text)`
  position: absolute;
  left: 191px;
  top: 359px;
`;

export const S20Comp = () => (
  <div>
    <Yes font="Montserrat" weight={FontWeights.Bold} size={40}>
      jep.
    </Yes>
    <Image1 src={image1} />
  </div>
);
