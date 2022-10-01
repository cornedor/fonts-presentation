import styled from "@emotion/styled";
import { useEffect } from "react";
import gsap from "gsap";

const Slide = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  perspective: 1328px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheeeShad = styled.div`
  position: absolute;
  font-size: 120px;
  font-family: Cheee;
  font-variation-settings: "yest" var(--yest), "gvty" var(--gvty);
  text-shadow: 5px 5px 0 #000;

  color: transparent;
`;

const Cheee = styled.div`
  position: absolute;
  font-size: 120px;
  font-family: Cheee;
  font-variation-settings: "yest" var(--yest), "gvty" var(--gvty);
  // text-shadow: 5px 5px 0 #f06;

  background: url(/halftone-pattern.gif);
  background-clip: text;
  text-fill-color: transparent;

  width: 920px;
  text-align: center;
  background-size: cover;
  background-position: center 42%;
`;

const CheeeShine = styled.div`
  position: absolute;
  font-size: 120px;
  font-family: Cheee;
  font-variation-settings: "yest" var(--yest), "gvty" var(--gvty);
  color: rgba(255, 180, 0, 0.5);
  -webkit-text-stroke: 2px #000;
`;

export const S99Comp = ({ visible }: { visible?: boolean }) => {
  useEffect(() => {
    const run = gsap.to("html", {
      "--yest": 1000,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
    const run2 = gsap.to("html", {
      "--gvty": 1000,
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
    return () => {
      run.revert();
      run.kill();
      run2.revert();
      run2.kill();
    };
  }, []);

  return (
    <Slide>
      <CheeeShad>Chunky Boi</CheeeShad>
      <Cheee>Chunky Boi</Cheee>
      <CheeeShine>Chunky Boi</CheeeShine>
    </Slide>
  );
};
