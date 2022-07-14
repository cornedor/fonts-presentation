import styled from "@emotion/styled";
import { onChildAdded } from "firebase/database";
import { useEffect, useState } from "react";
import { emojiRef } from "../Join";
import { EmojiParticle } from "./EmojiParticle";

const Emitter = styled.div`
  position: fixed;
  bottom: 40px;
  right: 140px;
  width: 2px;
  height: 2px;
  z-index: 2000;
`;

export function EmojiEmitter() {
  const [emoji, setEmoji] = useState<Array<[string, string]>>([]);
  useEffect(() => {
    onChildAdded(emojiRef, (data) => {
      const key = data.key;
      const value = data.val();
      setEmoji((c) => [...c, [String(key), value.emoji]]);
    });
  }, []);
  return (
    <Emitter>
      {emoji.map(([key, value]) => (
        <EmojiParticle key={key} emoji={value} />
      ))}
    </Emitter>
  );
}