import { ComponentMotion, Motion } from "@definitions/definitions";
import { motion } from "motion/react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const bounceVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
  rest: {
    scale: 1,
  },
};

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

export const CardsContainerMotion = ({ children }: Motion) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{ staggerChildren: 0.5 }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

export const CardsMotion = ({ children, id, className }: ComponentMotion) => (
  <motion.section variants={cardVariants} className={className} id={id}>
    {children}
  </motion.section>
);

export const CardsBounce = ({ children, id, className }: ComponentMotion) => (
  <motion.section
    variants={bounceVariants}
    whileHover="hover"
    id={id}
    className={className}
  >
    {children}
  </motion.section>
);

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
