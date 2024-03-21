import { IconContext } from "react-icons";
import { BsPhone, BsTablet } from "react-icons/bs";
import { DiMysql } from "react-icons/di";
import { FaDatabase, FaMobile, FaReact } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { MdDesignServices } from "react-icons/md";
import {
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiFlask,
  SiDjango,
  SiPython,
  SiPhp,
} from "react-icons/si";

type Skills = {
  id: number;
  skillsTitle: string;
  skillsIcons: React.ReactNode;
  skillsPresentation: string;
  skills: React.ReactNode;
};

export const skills: Skills[] = [
  {
    id: 1,
    skillsTitle: "Frontend",
    skillsIcons: <MdDesignServices />,
    skillsPresentation:
      "I offer my expertise in accurately translating frontend designs from Figma prototypes, as well as crafting custom designs aligned with specific design guidelines and principles.",
    skills: (
      <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
        <div className="mt-5 flex justify-center gap-2 lg:gap-4">
          <FaReact className="bg-malibu icon" />
          <SiTypescript className="bg-mariner icon" />
          <SiJavascript className="bg-ripeLemon icon" />
          <SiStorybook className="bg-wildWatermelon icon" />
          <SiTailwindcss className="bg-pictonBlue icon" />
        </div>
      </IconContext.Provider>
    ),
  },
  {
    id: 2,
    skillsTitle: "Backend",
    skillsIcons: <FaDatabase />,
    skillsPresentation:
      "I offer services with the ability to implement MVC architectures. Additionally, I am familiar with the use of containers to enhance application management and ensure their portability.",
    skills: (
      <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
        <div className="mt-5 flex justify-center gap-2 lg:gap-4">
          <SiPython className="bg-resolutionBlue icon " />
          <SiFlask className="bg-pelorous icon" />
          <SiDjango className="bg-bush icon" />
          <DiMysql className=" bg-pelorous icon " />
          <SiPhp className="bg-wildBlueYonder icon" />
        </div>
      </IconContext.Provider>
    ),
  },
  {
    id: 3,
    skillsTitle: "Best Practice",
    skillsIcons: <FaMobile />,
    skillsPresentation:
      "In every project I undertake, I steadfastly prioritize the mobile-first approach to development, ensuring scalability, performance, and user-centric design from the outset.",
    skills: (
      <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
        <div className="mt-5 flex items-end justify-center gap-2 lg:gap-4">
          <BsPhone className="icon bg-torchRed" />
          <BsTablet className="icon bg-torchRed" />
          <HiOutlineComputerDesktop className="icon bg-torchRed" />
        </div>
      </IconContext.Provider>
    ),
  },
];
