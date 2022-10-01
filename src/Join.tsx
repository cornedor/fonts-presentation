import styled from "@emotion/styled";
import { push, ref, serverTimestamp, set } from "firebase/database";
import { FormEvent, useCallback, useState } from "react";
import { Helmet } from "react-helmet";
import { database } from "./firebase";
import { useCurrentSlide } from "./useCurrentSlide";

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

const EmojiBoxes = styled.div<{ disabled: boolean }>`
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  display: flex;
  gap: 23px;
  flex-wrap: wrap;
  justify-content: center;
`;

const FontItem = styled.label`
  font-family: "Source Sans 3";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  display: block;
  padding: 10px;

  input {
    width: 20px;
    height: 20px;
    margin-right: 40px;
  }
`;

const Form = styled.form`
  padding-bottom: 60px;
`;

export const emojiRef = ref(database, "emoji");
export const fontsRef = ref(database, "fonts");
export const ligRef = ref(database, "ligs");
export const zininRef = ref(database, "zinin");

function Input() {
  const slide = useCurrentSlide();
  const [disabled, setDisabled] = useState(false);
  const [fontDisabled, setFontDisabled] = useState(
    localStorage.getItem("fontDisabled") === "true"
  );
  const [ligDisabled, setLigDisabled] = useState(
    localStorage.getItem("ligDisabled") === "true"
  );
  const [zininDisabled, setZininDisabled] = useState(
    localStorage.getItem("zininDisabled") === "true"
  );

  const addEmoji = useCallback((emoji: string) => {
    return () => {
      const ref = push(emojiRef);
      set(ref, {
        emoji,
        timestamp: serverTimestamp(),
      });

      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
      }, 200);
    };
  }, []);

  const handleSubmitFont = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (fontDisabled) {
        return;
      }
      const data = new FormData(e.currentTarget);
      setFontDisabled(true);
      localStorage.setItem("fontDisabled", "true");

      const ref = push(fontsRef);
      set(ref, {
        font: data.get("font"),
        timestamp: serverTimestamp(),
      });
    },
    [fontDisabled]
  );
  const handleSubmitLig = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (ligDisabled) {
        return;
      }
      const data = new FormData(e.currentTarget);
      setLigDisabled(true);
      localStorage.setItem("ligDisabled", "true");

      const ref = push(ligRef);
      set(ref, {
        font: data.get("font"),
        timestamp: serverTimestamp(),
      });
    },
    [ligDisabled]
  );
  const handleSubmitZinin = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (zininDisabled) {
        return;
      }
      const data = new FormData(e.currentTarget);
      setZininDisabled(true);
      localStorage.setItem("zininDisabled", "true");

      const ref = push(zininRef);
      set(ref, {
        font: data.get("font"),
        timestamp: serverTimestamp(),
      });
    },
    [zininDisabled]
  );

  switch (slide) {
    case -1:
      return (
        <>
          <Title>Nog even geduld...</Title>
          <Info>De presentatie zal zo starten. Heb je er al zin in?</Info>
          {zininDisabled ? (
            <Info>Bedankt voor je antwoord!</Info>
          ) : (
            <Form onSubmit={handleSubmitZinin}>
              <FontItem>
                <input type="radio" value="ja" name="font" />
                Ja
              </FontItem>
              <FontItem>
                <input type="radio" value="nee" name="font" />
                Nee
              </FontItem>
              <NextButton>Lets go!</NextButton>
            </Form>
          )}
        </>
      );
    case 22:
      return (
        <>
          <Title>Pick one</Title>
          <Info>Wat is nog meer een ligatuur?</Info>
          {ligDisabled ? (
            <Info>Bedankt voor je antwoord!</Info>
          ) : (
            <Form onSubmit={handleSubmitLig}>
              <FontItem>
                <input type="radio" value="sp" name="font" />
                sp
              </FontItem>
              <FontItem>
                <input type="radio" value="w" name="font" />w
              </FontItem>
              <FontItem>
                <input type="radio" value="Emoji" name="font" />
                👨‍👨‍👧‍👦
              </FontItem>
              <FontItem>
                <input type="radio" value="ß" name="font" />ß
              </FontItem>
              <NextButton>Lets go!</NextButton>
            </Form>
          )}
        </>
      );
    case 29:
      return (
        <>
          <Title>Pick one</Title>
          <Info>Welk font vind jij het mooist?</Info>
          {fontDisabled ? (
            <Info>Bedankt voor je stem!</Info>
          ) : (
            <Form onSubmit={handleSubmitFont}>
              <FontItem>
                <input type="radio" value="Source Serif" name="font" />
                Source Serif
              </FontItem>
              <FontItem>
                <input type="radio" value="SourceSerif" name="font" />
                Arial
              </FontItem>
              <FontItem>
                <input type="radio" value="Inconsolata" name="font" />
                Inconsolata
              </FontItem>
              <FontItem>
                <input type="radio" value="Slabo" name="font" />
                Slabo
              </FontItem>
              <FontItem>
                <input type="radio" value="Garamond" name="font" />
                Garamond
              </FontItem>
              <FontItem>
                <input type="radio" value="Verdana" name="font" />
                Verdana
              </FontItem>
              <FontItem>
                <input type="radio" value="Monofett" name="font" />
                Monofett
              </FontItem>
              <FontItem>
                <input type="radio" value="Sacramento" name="font" />
                Sacramento
              </FontItem>
              <FontItem>
                <input type="radio" value="Marcellus" name="font" />
                Marcellus
              </FontItem>
              <FontItem>
                <input type="radio" value="Alata" name="font" />
                Alata
              </FontItem>
              <FontItem>
                <input type="radio" value="PT Mono" name="font" />
                PT Mono
              </FontItem>
              <FontItem>
                <input type="radio" value="Ewert" name="font" />
                Ewert
              </FontItem>
              <NextButton>Lets go!</NextButton>
            </Form>
          )}
        </>
      );

    default:
      return (
        <>
          <Title>Engagement!</Title>
          <Info>
            Leuk dat je meedoet met de presentatie! Je kan me live feedback
            geven door Emoji te sturen.
          </Info>
          <EmojiBoxes disabled={disabled}>
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
        </>
      );
  }
}

export function Join() {
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

      <Input />
    </Background>
  );
}
