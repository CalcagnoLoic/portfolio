"use client";

import { navItems } from "@/app/data/navItems";
import { useMobile } from "@/app/hooks/useMobile";

import NavbarMobile from "./NavbarMobile";

const NavBar = () => {
  const isMobile = useMobile();
  
  return (
    <nav className="fixed bg-primary w-full flex z-20 justify-between px-8 md:px-16 lg:px-32 py-8">
      <h1 className="text-primary text-xl lg:text-3xl">
        Calcagno Loïc | Portfolio
      </h1>

      {isMobile ? (
        <NavbarMobile />
      ) : (
        <ol className="flex text-primary gap-5 self-center">
          {navItems.map((navItem) => (
            <li key={navItem.id}>
              <a href={navItem.href}>{navItem.content}</a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
};

export default NavBar;
