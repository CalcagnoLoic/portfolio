import { Projects } from "../types/interface";

import Link from "../components/Link";
import NetworkIcons from "../icons/NetworkIcons";
import SkillsIcons from "../icons/SkillsIcons";

export const Experimentation: Projects[] = [
  {
    id: "1nh-soc",
    projectIllustration: "assets/img/calculator-app.webp",
    projectTitle: "Calculator app",
    projectDescription:
      "Build and interact with this calculator app, developed to enhance my TypeScript and unit testing skills. The project follows clean code practices for maintainability.",
    projectStack: (
      <>
        <SkillsIcons kind="ts" />
        <SkillsIcons kind="tw" />
      </>
    ),
    projectWebsite: "https://calcagnoloic.github.io/calculator/",
    projectLink: (
      <>
        <Link
          href="https://github.com/CalcagnoLoic/calculator"
          content={
            <NetworkIcons kind="github" isDarkBackground={true} css="w-8 h-8" />
          }
          target="_blank"
          css="self-center w-[30px]"
        />
        <Link
          href="https://calcagnoloic.github.io/calculator/"
          target="_blank"
          content={<NetworkIcons kind="website" isDarkBackground={true} />}
        />
      </>
    ),
  },
  {
    id: "p@7l59k",
    projectIllustration: "assets/img/box-generator.webp",
    projectTitle: "Boxy generator",
    projectDescription:
      "Create CSS box-shadow code effortlessly with this generator. This project helped me learn Redux toolkit and state management concepts using React.",
    projectStack: (
      <>
        <SkillsIcons kind="react" />
        <SkillsIcons kind="redux" />
        <SkillsIcons kind="js" />
        <SkillsIcons kind="tw" />
      </>
    ),
    projectWebsite: "https://calcagnoloic.github.io/box_shadow_generator/",
    projectLink: (
      <>
        <Link
          href="https://github.com/CalcagnoLoic/box_shadow_generator"
          content={
            <NetworkIcons kind="github" isDarkBackground={true} css="w-8 h-8" />
          }
          target="_blank"
          css="self-center w-[30px]"
        />
        <Link
          href="https://calcagnoloic.github.io/box_shadow_generator/"
          target="_blank"
          content={<NetworkIcons kind="website" isDarkBackground={true} />}
        />
      </>
    ),
  },
  {
    id: "d$i1mf*",
    projectIllustration: "assets/img/catwiki.webp",
    projectTitle: "CatWiki",
    projectDescription:
      "Discover various cat breeds with this SPA, developed to enhance my skills in API consumption, context creation, and React Router integration.",
    projectStack: (
      <>
        <SkillsIcons kind="react" />
        <SkillsIcons kind="react-router" />
        <SkillsIcons kind="js" />
        <SkillsIcons kind="tw" />
      </>
    ),
    projectWebsite: "https://cat-wiki-loic.netlify.app/",
    projectLink: (
      <>
        <Link
          href="https://github.com/CalcagnoLoic/catwiki"
          content={
            <NetworkIcons kind="github" isDarkBackground={true} css="w-8 h-8" />
          }
          target="_blank"
          css="self-center w-[30px]"
        />
        <Link
          href="https://cat-wiki-loic.netlify.app/"
          target="_blank"
          content={<NetworkIcons kind="website" isDarkBackground={true} />}
        />
      </>
    ),
  },
];
