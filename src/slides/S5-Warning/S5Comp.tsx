import styled from "@emotion/styled";
import { FontWeights, Text } from "../../components/Text";
import { config } from "../../config";

const Title = styled(Text)`
  position: relative;
  z-index: 1;
  text-align: center;
  width: 100%;
  margin-top: 155px;
  display: block;
  color: white;
`;

const Info = styled(Text)`
  position: relative;
  z-index: 1;
  display: block;
  margin: 83px auto 0;
  text-align: left;
  width: 770px;
  color: white;
`;

const Nasty = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: ${config.width}px;
  height: ${config.height}px;
  opacity: 0.3;
  object-fit: cover;
`;

export const S5Comp = () => (
  <div>
    <Nasty src="https://media.giphy.com/media/DsdVe5jhHWNC8/giphy.gif" />
    <Title font="EB Garamond" size={128} weight={FontWeights.Regular}>
      Belangrijk!
    </Title>
    <Info font="Montserrat" size={20} weight={FontWeights.SemiBold}>
      <p>
        In deze presentatie kunnen namen genoemd worden van lettertypes die je
        niet mag gebruiken. In iedergeval deze fonts (maar niet gelimiteerd tot)
        mogen niet gebruikt worden:
      </p>
      <ul>
        <li>Comic Sans MS</li>
        <li>Papyrus</li>
        <li>Algerian</li>
        <li>Jokerman</li>
        <li>Curlz MT</li>
      </ul>
    </Info>
  </div>
);
