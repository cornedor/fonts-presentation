import styled from "@emotion/styled";
import { ref, runTransaction, set } from "@firebase/database";
import { useCallback } from "react";
import { database } from "./firebase";

const RemoteBoard = styled.div`
  background: #444;
  padding: 40px;
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
  padding: 40px;
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

const currentSlideRef = ref(database, "/currentSlide");

export function Remote() {
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

  return (
    <RemoteWrapper>
      <RemoteBoard>
        <NextPrev>
          <Button onClick={handleReset}>M</Button>
          <Button onClick={handleBuzz}>B</Button>
        </NextPrev>
        <NextPrev>
          <Button onClick={handlePrev}>-</Button>
          <Button onClick={handleReset}>R</Button>
          <Button onClick={handleNext}>+</Button>
        </NextPrev>
      </RemoteBoard>
    </RemoteWrapper>
  );
}
