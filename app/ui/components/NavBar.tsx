"use client";

import { navItems } from "@/app/data/navItems";
import { useMobile } from "@/app/hooks/useMobile";
import { bellefair } from "../fonts";

import NavbarMobile from "./NavbarMobile";

const NavBar = () => {
  const isMobile = useMobile();
  
  return (
    <nav className="fixed bg-primary w-full flex z-20 justify-between px-8 md:px-16 lg:px-32 py-8">
      <h1 className="text-primary text-xl lg:text-3xl font-bold">
        Calcagno Loïc | Portfolio
      </h1>

      {isMobile ? (
        <NavbarMobile />
      ) : (
        <ol className={`flex gap-8 self-center ${bellefair.className}`}>
          {navItems.map((navItem) => (
            <li key={navItem.id} className="hover:italic hover:text-secondary text-primary text-2xl" >
              <a href={navItem.href}>{navItem.content}</a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
};

export default NavBar;
