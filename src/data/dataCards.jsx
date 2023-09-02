import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";
import {
    SiTailwindcss,
    SiStyledcomponents,
    SiReactrouter,
    SiRedux
} from "react-icons/si";
import { nanoid } from "nanoid";

//1300x986 = format photo

export const dataCards = [
    {
        id: nanoid(4),
        image_project: "./img/box_generator.png",
        link_project: "https://calcagnoloic.github.io/box_shadow_generator/",
        logo_github: <BsGithub />,
        logo_redirect: <CgWebsite />,
        link_github: "https://github.com/CalcagnoLoic/box_shadow_generator",
        title: "Box generator",
        explanation:
            "Application that allows to generate a css code for box-shadow property. ReactJS, TailwindCSS and Redux-toolkit were used in this project. ",
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
        tag3: (
            <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                <SiRedux className="bg-indigo-400 rounded-xl p-2" />
            </IconContext.Provider>
        ),
    },
    {
        id: nanoid(4),
        image_project: "./img/catwiki.png",
        link_project: "https://cat-wiki-loic.netlify.app/",
        logo_github: <BsGithub />,
        logo_redirect: <CgWebsite />,
        link_github: "https://github.com/CalcagnoLoic/catwiki",
        title: "CatWiki",
        explanation:
            "Website providing information on around sixty species of cat (characteristics, descriptions). ReactJS, TailwindCSS and React-Router were used in this project. ",
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
        tag3: (
            <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
                <SiReactrouter className="bg-red-element rounded-xl p-2" />
            </IconContext.Provider>
        ),
    },
    {
        id: nanoid(4),
        image_project: "./img/weatherapp.png",
        link_project: "https://weather-airquality-app.netlify.app/",
        logo_github: <BsGithub />,
        logo_redirect: <CgWebsite />,
        link_github: "https://github.com/CalcagnoLoic/weather_airquality_app",
        title: "Weather and airquality app",
        explanation:
            "Application for obtaining information about the weather and the air quality index. ReactJS, TailwindCSS and AirVisualApi were used in this project.",
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
        id: nanoid(4),
        image_project: "./img/spacetourism.png",
        link_project: "https://space-tourism-loic.netlify.app/",
        logo_github: <BsGithub />,
        logo_redirect: <CgWebsite />,
        link_github: "https://github.com/CalcagnoLoic/space-tourism",
        title: "Space Tourism",
        explanation:
            "Single Page Application created following a Frontend Mentor challenge using ReactJS, Styled-components and React-Router.",
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
    {
        id: nanoid(4),
        image_project: "./img/loopstudio.png",
        link_project: "https://calcagnoloic.github.io/loopstudios/",
        logo_github: <BsGithub />,
        logo_redirect: <CgWebsite />,
        link_github: "https://github.com/CalcagnoLoic/loopstudios",
        title: "Loopstudio",
        explanation:
            "Landing page created following a Frontend Mentor challenge using ReactJS and TailwindCSS.",
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
];