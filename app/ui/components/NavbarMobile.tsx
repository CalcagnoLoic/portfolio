"use client";

import { AnimatePresence, motion } from "motion/react";
import { Icons } from "../icons/icons";
import { navItems } from "@/app/data/navItems";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import { useRef, useState } from "react";
import { useShouldOverflow } from "@/app/hooks/useShouldOverflow";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  useShouldOverflow({ state: isOpen });

  useClickOutside({
    callback: (shouldClose) => {
      if (shouldClose && isOpen) {
        setIsOpen(false);
      }
    },
    ref: navbarRef,
  });

  return (
    <>
      <div
        onClick={handleToggleMenu}
        className="z-50 cursor-pointer self-center"
      >
        {isOpen ? (
          <Icons.closeMenu color="#fff" />
        ) : (
          <Icons.menuIcon color="#fff" />
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed top-0 left-0 z-10 h-screen w-screen bg-white/30 backdrop-blur-[2px]"></div>

            <motion.div
              className="bg-primary absolute -top-5 -right-0 z-30 mt-5 h-screen w-1/2 pt-24 pl-5 md:w-1/3"
              ref={navbarRef}
              initial={{ x: "150%" }}
              animate={{ x: 0 }}
              exit={{
                x: ["0%", "120%", "100%"],
                transition: {
                  x: {
                    times: [0, 0.6, 1],
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 40,
                duration: 0.8,
              }}
            >
              <ol>
                {navItems.map((navItem) => (
                  <li key={navItem.id} className="text-primary p-4 text-xl">
                    <a href={navItem.href}>{navItem.content}</a>
                  </li>
                ))}
              </ol>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarMobile;
