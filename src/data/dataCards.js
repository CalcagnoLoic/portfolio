import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";
import {
    SiTailwindcss,
    SiStyledcomponents,
    SiReactrouter,
} from "react-icons/si";

export const dataCards = [
    {
        id: 1,
        image_project: "./img/loopstudio.png",
        link_project: "https://calcagnoloic.github.io/loopstudios/",
        logo_github: <BsGithub />,
        logo_redirect: <CgWebsite />,
        link_github: "https://github.com/CalcagnoLoic/loopstudios",
        title: "Loopstudio",
        explanation:
            "Landing page created following a Frontend Mentor challenge using ReactJS and TailwindCSS",
        tag1: (
            <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                <FaReact className="bg-sky-400 rounded-xl p-2" />
            </IconContext.Provider>
        ),
        tag2: (
            <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                <SiTailwindcss className="bg-sky-800 rounded-xl p-2" />
            </IconContext.Provider>
        ),
    },
    {
        id: 2,
        image_project: "./img/weatherapp.png",
        link_project: "https://weather-airquality-app.netlify.app/",
        logo_github: <BsGithub />,
        logo_redirect: <CgWebsite />,
        link_github: "https://github.com/CalcagnoLoic/weather_airquality_app",
        title: "Weather and airquality app",
        explanation:
            "Application for obtaining information about the weather and the air quality index using ReactJS and TailwindCSS",
        tag1: (
            <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                <FaReact className="bg-sky-400 rounded-xl p-2" />
            </IconContext.Provider>
        ),
        tag2: (
            <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                <SiTailwindcss className="bg-sky-800 rounded-xl p-2" />
            </IconContext.Provider>
        ),
    },
    {
        id: 3,
        image_project: "./img/spacetourism.png",
        link_project: "https://space-tourism-loic.netlify.app/",
        logo_github: <BsGithub />,
        logo_redirect: <CgWebsite />,
        link_github: "https://github.com/CalcagnoLoic/space-tourism",
        title: "Space Tourism",
        explanation:
            "SPA created following a Frontend Mentor challenge using ReactJS and React-Router",
        tag1: (
            <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                <FaReact className="bg-sky-400 rounded-xl p-2" />
            </IconContext.Provider>
        ),
        tag2: (
            <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                <SiStyledcomponents className="bg-pink-300 rounded-xl p-2" />
            </IconContext.Provider>
        ),
        tag3: (
            <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                <SiReactrouter className="bg-red-element rounded-xl p-2" />
            </IconContext.Provider>
        ),
    },
];
