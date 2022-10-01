import styled from "@emotion/styled";
import { Text, FontWeights } from "../../components/Text";
import { config } from "../../config";

const Intro = styled(Text)`
  position: absolute;
  left: 84px;
  top: 41px;
  text-align: center;
`;

const Answer = styled(Text)<{ visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  transition: translate 1.2s ease-out;
  translate: 153px ${(props) => (props.visible ? 186 : config.height)}px;
  text-align: center;
`;

const Image = styled.img<{ visible: boolean }>`
  position: absolute;
  width: 974.67px;
  height: 458.35px;
  left: 32px;
  top: 0;
  transition: translate 1.6s ease-out;
  translate: 0px ${(props) => (props.visible ? 290 : config.height)}px;
`;

export function S31Comp({ visible }: { visible: boolean }) {
  return (
    <div>
      <Intro font="Montserrat" size={50} weight={FontWeights.Bold}>
        Unicode 14 heeft 838 tekens toegevoegd 😉
      </Intro>

      <Answer
        visible={visible}
        font="Montserrat"
        size={50}
        weight={FontWeights.Bold}
      >
        144,697 characters in totaal
      </Answer>

      <Image visible={visible} src={require("./Group10.png")} />
    </div>
  );
}
