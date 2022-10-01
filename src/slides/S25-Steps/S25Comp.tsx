import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { onValue, ref } from "firebase/database";
import { database } from "../../firebase";

const Slide = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  perspective: 1328px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Sentence = styled.div<{ weight: number }>`
  font-family: "Source Sans 3";
  // font-weight: wght var(--weight);
  font-variation-settings: "wght" ${(props) => props.weight};

  font-size: 100px;
`;

export const weightRef = ref(database, "weight");

export const S25Comp = ({ visible }: { visible?: boolean }) => {
  const [weight, setWeight] = useState(400);
  useEffect(() => {
    onValue(weightRef, (data) => {
      setWeight(Number(data.val()));
    });
  }, []);

  return (
    <Slide>
      <Sentence weight={weight}>Infinite possibilities</Sentence>
      <input type="range" value={weight} min="200" max="900" />
    </Slide>
  );
};
