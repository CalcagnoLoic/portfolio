import { StateMotion } from "@/app/definitions/definitions";
import { motion } from "motion/react";

export const Dropdown = ({ children, state }: StateMotion) => (
  <motion.div
    initial={{
      opacity: 0,
      y: -20, // Initialisation en dehors de l'écran (ou légèrement en haut)
      height: 0, // Pas de hauteur au départ
    }}
    animate={
      state
        ? {
            opacity: 1,
            y: 0, // Remettre à sa position d'origine
            height: "auto", // La hauteur devient automatique pour s'adapter au contenu
          }
        : {
            opacity: 0,
            y: -20, // Remonter légèrement vers le haut pour simuler la fermeture
            height: 0, // Réduire la hauteur à zéro pour masquer le contenu
          }
    }
    exit={{
      opacity: 0,
      y: -20, // On remonte pour cacher l'élément
      height: 0, // On réduit la hauteur pour masquer complètement l'élément
      transition: {
        opacity: { duration: 0.3, ease: "easeOut" },
        y: { duration: 0.3, ease: "easeOut" },
        height: { duration: 0.3, ease: "easeOut" }, // Transition pour la hauteur
      },
    }}
    transition={{
      duration: 1.2,
      ease: "easeInOut",
      type: "spring",
    }}
    className="filter-button bg-primary border-bg-cards text-primary absolute right-0 z-10 mt-2 flex w-64 flex-col rounded-3xl border shadow-lg overflow-hidden" // Ajout de overflow-hidden pour gérer la hauteur dynamique
  >
    {children}
  </motion.div>
);
