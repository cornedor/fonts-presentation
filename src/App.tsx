import { ReactNode } from "react";
import { EmojiEmitter } from "./components/EmojiEmitter";
import { Slide } from "./components/Slide";
import { Join } from "./Join";
import { Remote } from "./Remote";
import { S1Comp } from "./slides/S1-intro/S1Comp";
import { S10Comp } from "./slides/S10-Discover/S10Comp";
import S11Svg from "./slides/S11-Serif/S11Svg";
import S12Svg from "./slides/S12-Comic/S12Svg";
import S13Svg from "./slides/S13-Monospace/S13Svg";
import { S14Comp } from "./slides/S14-Squares/S14Comp";
import { S15Comp } from "./slides/S15-HoldMyBeer/S15Comp";
import S16Svg from "./slides/S16-Skills/S13Svg";
import { S17Comp } from "./slides/S17-Fail/S17Comp";
import { S18Comp } from "./slides/S18-YesIDid/S18Comp";
import { S19Comp } from "./slides/S19-Cry/S19Comp";
import S2Svg from "./slides/S2-typetjes/S2Svg";
import { S20Comp } from "./slides/S20-YesItDoes/S18Comp";
import { S4Comp } from "./slides/S4-Word/S4Comp";
import { S5Comp } from "./slides/S5-Warning/S5Comp";
import { S6Comp } from "./slides/S6-History/S6Comp";
import { S7Comp } from "./slides/S7-History/S7Comp";
import { S8Comp } from "./slides/S8-Relevance/S8Comp";
import { S9Comp } from "./slides/S9-Relevance/S9Comp";
import { S99Comp } from "./slides/S99-Cheee/S99Comp";
import { useCurrentSlide } from "./useCurrentSlide";

const slides: Record<number, ReactNode> = {
  0: (
    <Slide background="white" key="0">
      <S1Comp visible={false} />
    </Slide>
  ),
  1: (
    <Slide background="white" key="0">
      <S1Comp visible={true} />
    </Slide>
  ),
  2: (
    <Slide background="wheat" key="1">
      <S2Svg />
    </Slide>
  ),
  3: (
    <Slide background="wheat" key="4">
      <S4Comp visible={false} />
    </Slide>
  ),
  4: (
    <Slide background="wheat" key="4">
      <S4Comp visible={true} />
    </Slide>
  ),
  5: (
    <Slide background="red" key="4">
      <S5Comp />
    </Slide>
  ),
  6: (
    <Slide background="wheat" key="6">
      <S6Comp visible={false} />
    </Slide>
  ),
  7: (
    <Slide background="wheat" key="6">
      <S6Comp visible={true} />
    </Slide>
  ),
  8: (
    <Slide background="wheat" key="7">
      <S7Comp visible={true} />
    </Slide>
  ),
  9: (
    <Slide background="white" key="9">
      <S8Comp visible={true} />
    </Slide>
  ),
  10: (
    <Slide background="wheat" key="9">
      <S9Comp visible={true} />
    </Slide>
  ),
  11: (
    <Slide background="white" key="9">
      <S10Comp visible={true} />
    </Slide>
  ),
  12: (
    <Slide background="wheat" key="9">
      <S11Svg />
    </Slide>
  ),
  13: (
    <Slide background="wheat" key="9">
      <S12Svg visible={false} />
    </Slide>
  ),
  14: (
    <Slide background="wheat" key="9">
      <S12Svg visible={true} />
    </Slide>
  ),
  15: (
    <Slide background="wheat" key="10">
      <S13Svg />
    </Slide>
  ),
  16: (
    <Slide background="white" key="11">
      <S14Comp visible />
    </Slide>
  ),
  17: (
    <Slide background="wheat" key="11">
      <S15Comp visible />
    </Slide>
  ),
  18: (
    <Slide background="wheat" key="12">
      <S16Svg />
    </Slide>
  ),
  19: (
    <Slide background="white" key="13">
      <S17Comp visible />
    </Slide>
  ),
  20: (
    <Slide background="wheat" key="13">
      <S18Comp />
    </Slide>
  ),
  21: (
    <Slide background="wheat" key="14">
      <S19Comp visible={true} />
    </Slide>
  ),
  22: (
    <Slide background="wheat" key="14">
      <S20Comp />
    </Slide>
  ),
  99: (
    <Slide background="white" key={7}>
      <S99Comp visible={true} />
    </Slide>
  ),
};

function App() {
  const slide = useCurrentSlide();

  if (window.location.pathname === "/remote") {
    return <Remote />;
  }

  if (window.location.pathname === "/join") {
    return <Join />;
  }

  console.log("Slide", slide);

  return (
    <>
      <EmojiEmitter />
      {slides[slide] ?? <div>Oh, dat was het al</div>}
      <>{slides[slide + 1] ?? null}</>
    </>
  );
}

export default App;
