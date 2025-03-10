"use client";

import { navItems } from "@/app/data/navItems";
import { useMobile } from "@/app/hooks/useMobile";
import { bellefair } from "../fonts";

import NavbarMobile from "./NavbarMobile";
import Image from "next/image";

const NavBar = () => {
  const isMobile = useMobile();

  return (
    <nav className="bg-primary fixed top-0 z-20 flex w-full justify-between border-b border-white/10 px-8 py-8 md:px-16 lg:bg-black/30 lg:px-32 lg:backdrop-blur-xl">
      <div className="flex gap-5">
        <Image
          src={"/assets/img/logo.png"}
          alt="test"
          width={50}
          height={50}
        />
        <h1 className="text-primary relative flex text-xl font-bold lg:text-3xl self-center">
          Calcagno Loïc
        </h1>
      </div>

      {isMobile ? (
        <NavbarMobile />
      ) : (
        <ol className={`flex gap-8 self-center ${bellefair.className}`}>
          {navItems.map((navItem) => (
            <li
              key={navItem.id}
              className="hover:text-secondary text-primary text-2xl hover:italic"
            >
              <a href={navItem.href}>{navItem.content}</a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
};

export default NavBar;
