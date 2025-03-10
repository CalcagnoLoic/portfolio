"use client";

import { useEffect, useState } from "react";
import { sofia } from "../fonts";

const texts = ["Développeur JavaScript ", "Python Enthusiast 🐍 "];

const Typewriter = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = isDeleting ? 50 : 100;

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        }, speed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, speed, textIndex]);

  return (
    <h2
      className={`text-center md:text-start text-2xl md:text-3xl lg:text-4xl mt-3 text-secondary ${sofia.className}`}
    >
      Je suis... {displayedText}
      <span className="blinking-cursor italic animate-pulse">|</span>
    </h2>
  );
};

export default Typewriter;
