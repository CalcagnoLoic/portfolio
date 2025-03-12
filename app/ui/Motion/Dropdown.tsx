import { StateMotion } from "@/app/definitions/definitions";
import { motion } from "motion/react";

export const Dropdown = ({ children, state }: StateMotion) => (
  <motion.div
    initial={{
      opacity: 0,
      y: -20,
      height: 0,
    }}
    animate={
      state
        ? {
            opacity: 1,
            y: 0,
            height: "auto",
          }
        : {
            opacity: 0,
            y: -20,
            height: 0,
          }
    }
    exit={{
      opacity: 0,
      y: -20,
      height: 0,
      transition: {
        opacity: { duration: 0.3, ease: "easeOut" },
        y: { duration: 0.3, ease: "easeOut" },
        height: { duration: 0.3, ease: "easeOut" },
      },
    }}
    transition={{
      duration: 1.2,
      ease: "easeInOut",
      type: "spring",
    }}
    className="filter-button bg-primary border-bg-cards text-primary absolute right-0 z-10 mt-2 flex w-64 flex-col overflow-hidden rounded-3xl border shadow-lg" // Ajout de overflow-hidden pour gérer la hauteur dynamique
  >
    {children}
  </motion.div>
);
