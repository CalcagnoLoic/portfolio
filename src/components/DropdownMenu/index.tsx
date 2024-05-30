import { useClickOutside } from "../../hooks/useClickOutside";
import { useRef, useState } from "react";
import { useShouldOverflow } from "../../hooks/useShouldOverflow";

import NavBarContent from "../NavBarContent";
import NavBarIcons from "../../icons/NavBarIcons";

const Component = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen((prevState) => !prevState);
  };

  useShouldOverflow({ state: isOpen });

  useClickOutside({ callback: setIsOpen, ref: navRef });

  return (
    <>
      <NavBarIcons isOpen={isOpen} handleClick={(e) => handleClick(e)} />

      {isOpen && (
        <>
          <div className="fixed left-0 top-0 h-screen w-screen bg-white/30 backdrop-blur-[2px]"></div>
          <div
            className="absolute -right-0 -top-5 mt-5 h-screen w-1/2 bg-tuatara pl-5 pt-24"
            ref={navRef}
          >
            <NavBarContent />
          </div>
        </>
      )}
    </>
  );
};

export default Component;
