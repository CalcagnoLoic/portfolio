"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";


const ScrollProgressBar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // On sait qu'on est côté client maintenant

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isClient) return null; // Évite d'exécuter le code avant le montage

  const scrollPercentage =
    (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) *
    100;

  return (
    <motion.div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "5px",
        backgroundColor: "#FFCA74",
      }}
    >
      <motion.div
        style={{
          height: "100%",
          backgroundColor: "#5CB7FF",
        }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollPercentage}%` }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  );
};

export default ScrollProgressBar;
