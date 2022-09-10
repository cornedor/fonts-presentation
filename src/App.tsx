import { ReactNode } from "react";
import { EmojiEmitter } from "./components/EmojiEmitter";
import { Slide } from "./components/Slide";
import { Join } from "./Join";
import { Remote } from "./Remote";
import { S1Comp } from "./slides/S1-intro/S1Comp";
import S2Svg from "./slides/S2-typetjes/S2Svg";
import { S4Comp } from "./slides/S4-Word/S4Comp";
import { S5Comp } from "./slides/S5-Warning/S5Comp";
import { S6Comp } from "./slides/S6-History/S6Comp";
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
  19: (
    <Slide background="wheat" key={7}>
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

  return (
    <>
      <EmojiEmitter />
      {slides[slide] ?? <div>Oh, dat was het al</div>}
      <>{slides[slide + 1] ?? null}</>
    </>
  );
}

export default App;
