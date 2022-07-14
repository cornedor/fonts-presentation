import styled from "@emotion/styled";
import { push, ref, serverTimestamp, set } from "firebase/database";
import { useCallback } from "react";
import { Helmet } from "react-helmet";
import { database } from "./firebase";

const Background = styled.div`
  background: black;
  background-image: url(/f.svg);
  background-size: 110% 110%;
  background-position: -20px 50%;
  min-width: 100vw;
  min-height: 100vh;
  padding: 24px;
  color: white;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-family: "Source Sans 3";
  font-style: normal;
  font-weight: 900;
  font-size: 42px;
`;

const Info = styled.p`
  font-family: "Source Sans 3";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;

const NextButton = styled.button`
  background: #ff4d00;
  height: 50px;
  border: 0;
  padding: 15px;
  margin: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  font-family: "Source Sans 3";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 97.7%;
  /* identical to box height, or 20px */

  color: #ffffff;
`;

const EmojiBox = styled.button`
  width: 75px;
  height: 75px;
  left: 25px;
  top: 269px;
  padding: 0;

  background: #1c1c1c;
  border: 2px solid #ffffff;
  border-radius: 4px;

  font-size: 50px;
`;

const EmojiBoxes = styled.div`
  display: flex;
  gap: 23px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const emojiRef = ref(database, "emoji");

export function Join() {
  const addEmoji = useCallback((emoji: string) => {
    return () => {
      const ref = push(emojiRef);
      set(ref, {
        emoji,
        timestamp: serverTimestamp(),
      });
    };
  }, []);

  return (
    <Background>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Title>Awesome!</Title>
      <Info>
        leuk dat je mee wilt doen. Om je zelf straks terug te zien in de
        presentatie kan je hier een nickname en avater kiezen.
      </Info>
      <EmojiBoxes>
        <EmojiBox onClick={addEmoji("😂")}>😂</EmojiBox>
        <EmojiBox onClick={addEmoji("🔥")}>🔥</EmojiBox>
        <EmojiBox onClick={addEmoji("🤮")}>🤮</EmojiBox>
        <EmojiBox onClick={addEmoji("🚀")}>🚀</EmojiBox>
        <EmojiBox onClick={addEmoji("👎")}>👎</EmojiBox>
        <EmojiBox onClick={addEmoji("❤️")}>❤️</EmojiBox>
        <EmojiBox onClick={addEmoji("🕵️‍♂️")}>🕵️‍♂️</EmojiBox>
        <EmojiBox onClick={addEmoji("🥱")}>🥱</EmojiBox>
        <EmojiBox onClick={addEmoji("🫡")}>🫡</EmojiBox>
        <EmojiBox onClick={addEmoji("🪂")}>🪂</EmojiBox>
      </EmojiBoxes>

      <NextButton>Lets go!</NextButton>
    </Background>
  );
}
