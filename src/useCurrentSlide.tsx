import { onValue, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { database } from "./firebase";

const currentSlideRef = ref(database, "/currentSlide");

export function useCurrentSlide() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    onValue(currentSlideRef, (snapshot) => {
      const data = snapshot.val();
      setSlide(Number(data));
    });
  }, []);

  return slide
}
