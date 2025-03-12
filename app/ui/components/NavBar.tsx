"use client";

import { navItems } from "@/app/data/navItems";
import { useMobile } from "@/app/hooks/useMobile";
import { bellefair } from "../fonts";

import NavbarMobile from "./NavbarMobile";
import Image from "next/image";
import { useActiveSection } from "@/app/hooks/useActionSection";
import { motion } from "motion/react";

const NavBar = () => {
  const isMobile = useMobile();
  const sections = ["Projets", "Compétences", "Témoignages", "Contact"];
  const { activeSection, setActiveSection } = useActiveSection(sections);

  const handleClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bg-primary fixed top-0 z-20 flex w-full justify-between border-b border-white/10 bg-black/30 px-8 py-8 backdrop-blur-xl md:px-16 lg:px-32">
      <div className="flex gap-5">
        <Image src={"/assets/img/logo.png"} alt="test" width={50} height={50} />
        <h1 className="text-primary relative flex self-center text-xl font-bold lg:text-3xl">
          Calcagno Loïc
        </h1>
      </div>

      {isMobile ? (
        <NavbarMobile />
      ) : (
        <ol className={`flex gap-8 self-center ${bellefair.className}`}>
          {navItems.map((navItem) => {
            const isActive = activeSection === navItem.content;
            return (
              <li
                key={navItem.id}
                className="text-primary text-2xl hover:italic"
                onClick={() => handleClick(navItem.content)}
              >
                <motion.a
                  href={navItem.href}
                  className={` ${isActive ? "text-[#FFCA96] italic" : ""}`}
                  initial={{ borderBottomWidth: 0, paddingBottom: 0 }}
                  animate={
                    isActive
                      ? {
                          borderBottomWidth: 4,
                          paddingBottom: 40,
                          borderColor: "#FFCA96",
                        }
                      : { borderBottomWidth: 0, paddingBottom: 0 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {navItem.content}
                </motion.a>
              </li>
            );
          })}
        </ol>
      )}
    </nav>
  );
};

export default NavBar;
