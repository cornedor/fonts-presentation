import styled from "@emotion/styled";
import { onValue, ref } from "firebase/database";
import React, { ReactNode, useEffect, useState } from "react";
import { Slide } from "./components/Slide";
import { database } from "./firebase";
import { Remote } from "./Remote";
import { S1Comp } from "./slides/S1-intro/S1Comp";
import S2Svg from "./slides/S2-typetjes/S2Svg";
import { S3Comp } from "./slides/S3-Fonts/S3Comp";

const Controls = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
`;

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
    <Slide background="wheat" key="2">
      <S3Comp />
    </Slide>
  ),
};

const currentSlideRef = ref(database, "/currentSlide");

function App() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    onValue(currentSlideRef, (snapshot) => {
      const data = snapshot.val();
      setSlide(Number(data));
    });
  }, []);

  if (window.location.pathname === "/remote") {
    return <Remote />;
  }

  return (
    <>
      {slides[slide] ?? <div>Oh, dat was het al</div>}
      <>{slides[slide + 1] ?? null}</>
      <Controls>
        <button onClick={() => setSlide((i) => i + 1)}>next</button>
      </Controls>
    </>
  );
}

export default App;
