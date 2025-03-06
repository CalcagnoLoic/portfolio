import { ComponentMotion } from "@/app/definitions/definitions";
import { motion } from "motion/react";

export const TitleMotion = ({ children, id, className }: ComponentMotion) => (
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    id={id}
    className={className}
  >
    {children}
  </motion.h2>
);
