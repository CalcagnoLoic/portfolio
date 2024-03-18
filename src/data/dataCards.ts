import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";
import {
  SiTailwindcss,
  SiStyledcomponents,
  SiReactrouter,
  SiRedux,
  SiTypescript,
  SiStorybook,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { nanoid } from "nanoid";

//1300x986 = format photo

export const dataCards = [
  {
    id: nanoid(4),
    image_project: "./img/sneakers.png",
    link_project: "https://calcagnoloic.github.io/ecommerce-sneakers/",
    logo_github: <BsGithub />,
    logo_redirect: <CgWebsite />,
    link_github: "https://github.com/CalcagnoLoic/ecommerce-sneakers",
    logo_storybook: <SiStorybook />,
    link_chromatic:
      "https://65b3f7c0ccbf56939b38309a-gyhhowhxyz.chromatic.com/",
    title: "E-commerce Sneakers",
    explanation:
      "Ecommerce for adding a pair of sneakers to the shopping cart. ReactTS, TailwindCSS and Storybook were used in this project. ",
    tag1: (
      <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
        <FaReact className="bg-sky-400 rounded-xl p-2" />
      </IconContext.Provider>
    ),
    tag2: (
      <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
        <SiTypescript className="bg-blue-800 rounded-xl p-2" />
      </IconContext.Provider>
    ),

    tag3: (
      <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
        <SiStorybook className="bg-rose-600 rounded-xl p-2" />
      </IconContext.Provider>
    ),
    tag4: (
      <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
        <SiTailwindcss className="bg-sky-800 rounded-xl p-2" />
      </IconContext.Provider>
    ),
  },
  {
    id: nanoid(4),
    image_project: "./img/password-generator.png",
    link_project: "https://calcagnoloic.github.io/password-generator-app/",
    logo_github: <BsGithub />,
    logo_redirect: <CgWebsite />,
    link_github: "https://github.com/CalcagnoLoic/password-generator-app",
    title: "Password generator",
    explanation:
      "Application that allows to generate a random password including uppercase/lowercase letters, numbers and/or symbols using TypeScript and TailwindCSS. ",
    tag1: (
      <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
        <SiTypescript className="bg-blue-800 rounded-xl p-2" />
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
    image_project: "./img/calculator-app.png",
    link_project: "https://calcagnoloic.github.io/calculator/",
    logo_github: <BsGithub />,
    logo_redirect: <CgWebsite />,
    link_github: "https://github.com/CalcagnoLoic/calculator",
    title: "Calculator app",
    explanation:
      "Small calculator application with basics operands for addition, division, substraction and multiplication using TypeScript and TailwindCSS. ",
    tag1: (
      <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
        <SiTypescript className="bg-blue-800 rounded-xl p-2" />
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
        <IoLogoJavascript className="bg-yellow-400 rounded-xl p-2" />
      </IconContext.Provider>
    ),
    tag3: (
      <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
        <SiRedux className="bg-indigo-400 rounded-xl p-2" />
      </IconContext.Provider>
    ),
    tag4: (
      <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
        <SiTailwindcss className="bg-sky-800 rounded-xl p-2" />
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
        <SiReactrouter className="bg-red-element rounded-xl p-2" />
      </IconContext.Provider>
    ),
    tag3: (
      <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
        <IoLogoJavascript className="bg-yellow-400 rounded-xl p-2" />
      </IconContext.Provider>
    ),
    tag4: (
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
        <SiReactrouter className="bg-red-element rounded-xl p-2" />
      </IconContext.Provider>
    ),
    tag3: (
      <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
        <IoLogoJavascript className="bg-yellow-400 rounded-xl p-2" />
      </IconContext.Provider>
    ),
    tag4: (
      <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
        <SiStyledcomponents className="bg-pink-300 rounded-xl p-2" />
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
        <IoLogoJavascript className="bg-yellow-400 rounded-xl p-2" />
      </IconContext.Provider>
    ),
    tag3: (
      <IconContext.Provider value={{ size: "2.5em", color: "white" }}>
        <SiTailwindcss className="bg-sky-800 rounded-xl p-2" />
      </IconContext.Provider>
    ),
  },
];
