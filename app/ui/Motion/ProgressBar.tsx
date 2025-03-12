"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const [isClient, setIsClient] = useState(false);
  const [progressValue, setProgressValue] = useState(0);

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  console.log(progress);

  useEffect(() => {
    setIsClient(true);
    return progress.onChange((latest) => setProgressValue(latest));
  }, [progress]);

  if (!isClient) return null;

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
        animate={{ width: `${progressValue}%` }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  );
};

export default ScrollProgressBar;
