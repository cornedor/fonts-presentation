import styled from "@emotion/styled";
import { ref, runTransaction, set } from "@firebase/database";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { database } from "./firebase";
import { useCurrentSlide } from "./useCurrentSlide";

const RemoteBoard = styled.div`
  background: #444;
  padding: 30px;
  border-radius: 40px;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
`;

const NextPrev = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const RemoteWrapper = styled.div`
  background: #222;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
`;

const Button = styled.button`
  background: #222222;
  border: 6px solid #6a6a6a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 1px 4px 1px rgba(255, 255, 255, 0.25);
  padding: 0;

  color: white;
  width: 80px;
  height: 80px;

  border-radius: 40px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 49px;

  > svg {
    margin-top: 10px;
  }

  &:hover {
    background: #333;
  }
  &:active {
    background: #333;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Notes = styled.div`
  flex: 1;
  color: white;
  font-family: "EB Garamond";
  font-size: 18px;
  font-weight: 500;
`;

const CompactList = styled.ul`
  padding: 0;
`;

const Time = styled.div`
  color: white;
  margin-top: -20px;
`;

const currentSlideRef = ref(database, "/currentSlide");

const notes: Record<number, ReactNode> = {
  6: (
    <CompactList>
      <li>1450 Johannes Gutenberg, Gutenbergbijbel.</li>
      <li>Niet de eerste boekdrukkunst, blokdruk bestond al.</li>
      <li>1239/1240 al losse letters in Korea. Daarvoor China.</li>
    </CompactList>
  ),
};

export function Remote() {
  const slide = useCurrentSlide();
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [time, setTime] = useState<string>("N/A");

  const handleNext = useCallback(() => {
    runTransaction(currentSlideRef, (current) => {
      if (current == null) {
        return 1;
      }
      return current + 1;
    });
  }, []);

  const handlePrev = useCallback(() => {
    runTransaction(currentSlideRef, (current) => {
      if (current == null) {
        return 1;
      }
      return current - 1;
    });
  }, []);

  const handleReset = useCallback(() => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("U sure?")) {
      set(currentSlideRef, 0);
    }
  }, []);

  const handleBuzz = useCallback(() => {
    navigator.vibrate([200, 100, 200]);
  }, []);

  const handleTime = useCallback(() => {
    setStartTime(new Date());
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      const diff = Date.now() - startTime.getTime();
      const diffDate = new Date(diff);
      const str = Intl.DateTimeFormat("nl", {
        minute: "numeric",
        second: "numeric",
      });
      setTime(str.format(diffDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <RemoteWrapper>
      <RemoteBoard>
        <Time>{time}</Time>
        <NextPrev>
          <Button onClick={handleTime}>T</Button>
          <Button onClick={handleReset}>M</Button>
          <Button onClick={handleBuzz}>B</Button>
        </NextPrev>
        <Notes>{slide in notes ? notes[slide] : null}</Notes>
        <NextPrev>
          <Button onClick={handlePrev}>-</Button>
          <Button onClick={handleReset}>R</Button>
          <Button onClick={handleNext}>+</Button>
        </NextPrev>
      </RemoteBoard>
    </RemoteWrapper>
  );
}
