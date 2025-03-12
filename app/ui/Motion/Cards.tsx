import { ComponentMotion, Motion } from "@/app/definitions/definitions";
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
    initial="rest"
    variants={bounceVariants}
    whileHover="hover"
    id={id}
    className={className}
  >
    {children}
  </motion.section>
);
