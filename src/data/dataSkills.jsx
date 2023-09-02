import { MdOutlineDesignServices } from "react-icons/md";
import { BsFillDatabaseFill, BsPhone, BsTablet } from "react-icons/bs";
import { BiMobileAlt } from "react-icons/bi";
import { IconContext } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import { FaSass, FaReact, FaPhp, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { SiDjango} from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

export const dataSkills = [
    {
        id: 1,
        title: "Frontend",
        paragraph:
            "I am able to reproduce frontend designs following a Figma board as well as creating my own design following specific rules. ",
        icons: <MdOutlineDesignServices />,
        skills: (
            <div className="flex flex-row gap-5 justify-center">
                <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                    <AiFillHtml5 className="bg-orange-600 rounded-xl p-2" />
                </IconContext.Provider>
                <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                    <FaSass className="bg-pink-600 rounded-xl p-2" />
                </IconContext.Provider>
                <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                    <SiTailwindcss className="bg-sky-800 rounded-xl p-2" />
                </IconContext.Provider>
                <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                    <IoLogoJavascript className="bg-yellow-400 rounded-xl p-2" />
                </IconContext.Provider>
                <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                    <FaReact className="bg-sky-400 rounded-xl p-2" />
                </IconContext.Provider>
            </div>
        ),
    },
    {
        id: 2,
        title: "Backend",
        paragraph:
            "I can work structurally and object-oriented and apply an MVC structure in my backend projects. I also have skills in data mining and basic graphical exploration.",
        icons: <BsFillDatabaseFill />,
        skills: (
            <div className="flex flex-row gap-5 justify-center">
                <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                    <GrMysql className="bg-blue-700 rounded-xl p-2" />
                </IconContext.Provider>
                <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                    <FaPhp className="bg-violet-700 rounded-xl p-2" />
                </IconContext.Provider>
                <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                    <FaPython className="bg-blue-700 rounded-xl p-2" />
                </IconContext.Provider>
                <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                    <SiDjango className="bg-emerald-900 rounded-xl p-2" />
                </IconContext.Provider>
            </div>
        ),
    },
    {
        id: 3,
        title: "Responsive design",
        paragraph:
            "In every project I work on, I apply responsive web design so that they fit on mobile, tablet and computer. I also apply the mobile first strategy.",
        icons: <BiMobileAlt />,
        skills: (
            <div className="flex flex-row gap-5 justify-center">
                <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                    <BsPhone className="bg-red-400 rounded-xl p-2" />
                </IconContext.Provider>
                <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                    <BsTablet className="bg-red-400 rounded-xl p-2" />
                </IconContext.Provider>
                <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                    <RiComputerLine className="bg-red-400 rounded-xl p-2" />
                </IconContext.Provider>
            </div>
        ),
    },
];
