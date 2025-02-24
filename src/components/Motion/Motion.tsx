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

export const TitleMotion = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    {children}
  </motion.h2>
);

export const CardsContainerMotion = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{ staggerChildren: 0.5 }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

export const CardsMotion = ({ children }: { children: React.ReactNode }) => (
  <motion.section variants={cardVariants} className="flex h-full">
    {children}
  </motion.section>
);

export const CardsBounce = ({ children }: { children: React.ReactNode }) => (
  <motion.section variants={bounceVariants} whileHover="hover">
    {children}
  </motion.section>
);

export const FormMotion = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{duration: 0.5, ease:"easeOut"}}
    viewport={{once: true, amount: 0.3}}
  >
    {children}
  </motion.section>
);

