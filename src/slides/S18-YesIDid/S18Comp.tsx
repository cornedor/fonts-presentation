import styled from "@emotion/styled";
import { FontWeights, Text } from "../../components/Text";

const image1 = require("./image13.jpg");
const image2 = require("./image14.jpg");

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Image1 = styled(Image)`
  width: 450px;
  height: 300px;
  left: 507px;
  top: 64px;
`;
const Image2 = styled(Image)`
  width: 450px;
  height: 300px;
  left: 507px;
  top: 396px;
`;
const Yes = styled(Text)`
  position: absolute;
  left: 191px;
  top: 359px;
`;

export const S18Comp = () => (
  <div>
    <Yes font="Montserrat" weight={FontWeights.Bold} size={40}>
      wel.
    </Yes>
    <Image1 src={image2} />
    <Image2 src={image1} />
  </div>
);
