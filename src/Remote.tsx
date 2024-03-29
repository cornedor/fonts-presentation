import styled from "@emotion/styled";
import { ref, runTransaction, set } from "@firebase/database";
import { DatabaseReference, onValue } from "firebase/database";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { database } from "./firebase";
import { emojiRef, fontsRef, ligRef, zininRef } from "./Join";
import { weightRef } from "./slides/S25-Steps/S25Comp";
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

function Votes({ fbRef }: { fbRef: DatabaseReference }) {
  const [votes, setVotes] = useState<[string, number][]>([]);

  useEffect(() => {
    onValue(fbRef, (snap) => {
      const data = snap.val();
      const values = Object.values(data) as Array<{ font: string }>;

      const votes: Record<string, number> = {};
      values.forEach((item) => {
        votes[item.font] = (votes[item.font] ?? 0) + 1;
      });
      setVotes(Object.entries(votes));
    });
  }, [fbRef]);

  return (
    <div>
      <div>Votes:</div>
      <CompactList>
        {votes.map((item) => (
          <li>
            {item[0]}: {item[1]}
          </li>
        ))}
      </CompactList>
    </div>
  );
}

const notes: Record<number, ReactNode> = {
  [-1]: <Votes fbRef={zininRef} />,
  6: (
    <CompactList>
      <li>Eerste boekdrukkunst in 1450 Johannes Gutenberg, Gutenbergbijbel.</li>
      <li>
        Niet de eerste boekdrukkunst, blokdruk bestond al. Nu is meer een
        lettertype geworden
      </li>
      <li>
        Preciesie werk, jusite metaal. Ene zete uit, andere kromp. Te zacht
      </li>
      <li>1239/1240 al losse letters in Korea. Daarvoor China.</li>
    </CompactList>
  ),
  7: (
    <CompactList>
      <li>United States Declaration of Independence</li>
      <li>When in doubt use Caslon</li>
    </CompactList>
  ),
  8: (
    <CompactList>
      <li>Typesetting, zetten. Drukpers. Loden letters</li>
      <li>Onderkast, Bovenkast. Uppercase, Lowercase</li>
    </CompactList>
  ),
  22: (
    <>
      <CompactList>
        <li>Ligatuur</li>
        <li>f + b, f, l, k, h</li>
        <li>f + i, j</li>
        <li>Wat is nog meer een ligatuur?</li>
        <li>w 2x u, ss, iedereen goed, sp kan, emoji</li>
      </CompactList>
      <Votes fbRef={ligRef} />
    </>
  ),
  25: (
    <CompactList>
      <li>Serif, Sans Serif, Monospace, Slab Serif</li>
      <li>Monospace</li>
      <li>Display</li>
      <li>Handwritten</li>
    </CompactList>
  ),
  30: <Votes fbRef={fontsRef} />,
  31: <Votes fbRef={fontsRef} />,
  33: (
    <div>
      <input
        style={{ marginTop: 80, width: "350px" }}
        type="range"
        min="200"
        max="900"
        onInput={(e) => {
          set(weightRef, Number(e.currentTarget.value));
        }}
      />
      <CompactList>
        <li>Show arms of f and t</li>
      </CompactList>
    </div>
  ),
  38: (
    <CompactList>
      <li>Screenshot source sans 3, paar slides terug</li>
      <li>Zie al deze lege vakjes</li>
      <li>Ik wou daar eerst oneidigheids teken gebruiken</li>
    </CompactList>
  ),
  39: (
    <CompactList>
      <li>Zoals je ziet lijken deze twee e's niet op elkaar</li>
      <li>Het font mist die letter</li>
      <li>Dat komt omdat die letter rare is.</li>
    </CompactList>
  ),
  40: (
    <CompactList>
      <li>Ook laten zien dat e doorschiet</li>
    </CompactList>
  ),
  41: (
    <CompactList>
      <li>Maar het kan veel erger</li>
      <li>Een aantal weken geleden kwam ik dit character en qoute tegen</li>
      <li>Discussie over dit character</li>
    </CompactList>
  ),
  42: (
    <CompactList>
      <li>Emoji valt er ook onder</li>
      <li>Smeltend gezicht, hand voor mond, op lip bijten, hand gebaren</li>
      <li>Glijbaan, troll, bonen</li>
      <li>112 in totaal</li>
    </CompactList>
  ),
  43: (
    <CompactList>
      <li>112 emoji in toegevoegd</li>
      <li>Heroglieven, inclusief missende of deels missende characters</li>
      <li>Het combineren er van.</li>
      <li>Oude talen en dialecten, en het combineren er van</li>
      <li>Moderene talen, waar dialecten afwijken</li>
      <li>Unicode 15, 4489; Kawi en Nag Mundari</li>
    </CompactList>
  ),
  44: (
    <CompactList>
      <li>Maar zo kunnen we nog wel uren doorgaan</li>
      <li>Serif, Sans Serif, is maar een vage grens</li>
      <li>de geschiedenis was relevant</li>
      <li>Huiswerk: Gekleurde fonts</li>
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

  const handleResetEmoji = useCallback(() => {
    set(emojiRef, null);
    set(fontsRef, null);
  }, []);

  return (
    <RemoteWrapper>
      <RemoteBoard>
        <Time>
          {time} / {slide}
        </Time>
        <NextPrev>
          <Button onClick={handleTime}>T</Button>
          <Button onClick={handleResetEmoji}>🧽</Button>
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
