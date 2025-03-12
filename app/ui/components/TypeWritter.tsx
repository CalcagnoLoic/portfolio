"use client";

import { useEffect, useState } from "react";
import { sofia } from "../fonts";

const texts = ["Développeur JavaScript", "Python Enthusiast 🐍"];

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
      className={`text-primary mt-3 md:text-center text-[22px] md:text-start md:text-3xl lg:text-4xl ${sofia.className}`}
    >
      Je suis... <span className="text-accent-secondary">{displayedText}</span>
      <span className="blinking-cursor text-accent-secondary animate-pulse italic">
        |
      </span>
    </h2>
  );
};

export default Typewriter;
