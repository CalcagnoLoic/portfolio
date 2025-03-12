"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export const useActiveSection = (sectionsIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const threshold = 0.7;

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    if (Math.abs(scrollY - lastScrollY.current) > 10) {
      lastScrollY.current = scrollY;

      let currentSection: string | null = activeSection;

      for (const id of sectionsIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible =
            rect.top < window.innerHeight * threshold &&
            rect.bottom > window.innerHeight * threshold;

          if (isVisible) {
            currentSection = id;
            break;
          }
        }
      }

      if (!currentSection && scrollY < 100) currentSection = null;

      setActiveSection((prev) => {
        if (prev !== currentSection) {
          console.log(`Changement de section : ${prev} → ${currentSection}`);
          return currentSection;
        }
        return prev;
      });
    }
  }, [activeSection, sectionsIds]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { activeSection, setActiveSection };
};
