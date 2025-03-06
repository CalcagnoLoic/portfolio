import { motion } from "motion/react";

export const FormMotion = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="mt-5 flex flex-col items-center lg:mt-2 lg:flex-row"
  >
    {children}
  </motion.section>
);
