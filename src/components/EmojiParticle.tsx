import styled from "@emotion/styled";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 40px;
`;

interface Props {
  emoji: string;
}

export function EmojiParticle({ emoji }: Props) {
  const frame = useRef(0);
  const seedRef = useRef(useMemo(() => Math.random(), []));
  const seed = seedRef.current;
  const [position, setPosition] = useState([seed * 20, 0]);

  const loop = useCallback(() => {
    frame.current = frame.current + 1;
    const wide = frame.current * 0.3;
    setPosition([
      Math.sin((frame.current + seed * 1000) / 100) * wide,
      -frame.current,
    ]);
    requestAnimationFrame(loop);
  }, [seed]);

  useEffect(() => {
    requestAnimationFrame(loop);
  }, [loop]);

  return (
    <Span
      style={{
        transform: `translate3d(${position[0]}px, ${position[1]}px, 0)`,
      }}
    >
      {emoji}
    </Span>
  );
}
