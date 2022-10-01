import styled from "@emotion/styled";

const Image = styled.img`
  width: 600px;
  height: 600px;
  image-rendering: pixelated;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function S0Comp() {
  return (
    <Wrapper>
      <Image src={require("./qrcode.png")} />
    </Wrapper>
  );
}
