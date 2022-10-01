import styled from "@emotion/styled";

const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url(${require("./Slide43.jpg")});
  background-size: cover;
`;

export function S32Comp() {
  return <Image />;
}
