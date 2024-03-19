import { useMobile } from "../../hooks/useMobile";

import DropdownMenu from "../DropdownMenu";
import Heading from "../../typographies/Heading";
import NavBarContent from "../NavBarContent";

const Component = () => {
  const isMobile = useMobile();
  return (
    <header>
      <nav className="fixed flex w-full justify-between bg-tuatara px-12 py-8 pt-5 text-white md:px-32">
        <Heading
          kind="h1"
          content="Portfolio | Calcagno Loïc"
          css="text-xl md:text-3xl font-[barlow]"
        />

        {isMobile ? <DropdownMenu /> : <NavBarContent />}
      </nav>
    </header>
  );
};

export default Component;
