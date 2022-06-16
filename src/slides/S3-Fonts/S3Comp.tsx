import styled from "@emotion/styled";

const image = require("./Slide3.jpg");

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const S3Comp = () => <Image src={image} alt="" />;
