"use client";

import { useRef, useState } from "react";
import { Icons } from "../icons/icons";
import { navItems } from "@/app/data/navItems";
import { useClickOutside } from "@/app/hooks/useClickOutside";
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
      <div onClick={handleToggleMenu} className="cursor-pointer z-50">
        {isOpen ? (
          <Icons.closeMenu color="#fff" />
        ) : (
          <Icons.menuIcon color="#fff" />
        )}
      </div>

      {isOpen && (
        <>
          <div className="fixed left-0 top-0 h-screen w-screen bg-white/30 backdrop-blur-[2px] z-10"></div>
          <div
            className="absolute -right-0 -top-5 mt-5 h-screen w-1/2 md:w-1/3 bg-primary pl-5 pt-24 z-20"
            ref={navbarRef}
          >
            <ol>
              {navItems.map((navItem) => (
                <li key={navItem.id} className="text-primary text-xl p-4">
                  <a href={navItem.href}>{navItem.content}</a>
                </li>
              ))}
            </ol>
          </div>
        </>
      )}
    </>
  );
};

export default NavbarMobile;
