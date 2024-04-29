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
      "Thanks to this project to create an interactive calculator, I was able to improve my knowledge of typescript and unit testing.  Clean code practices led the direction of the project.",
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
            <NetworkIcons
              kind="github"
              isDarkBackground={true}
              css="w-8 h-8"
            />
          }
          target="_blank"
          css="self-center w-[30px]"
        />
        <Link
          href="https://calcagnoloic.github.io/calculator/"
          target="_blanck"
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
      "Thanks to this CSS code generator project for the box-shadow property, I was able to learn about the redux toolkit and state management practices and concepts with React.",
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
            <NetworkIcons
              kind="github"
              isDarkBackground={true}
              css="w-8 h-8"
            />
          }
          target="_blank"
          css="self-center w-[30px]"
        />
        <Link
          href="https://calcagnoloic.github.io/box_shadow_generator/"
          target="_blanck"
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
      "Thanks to this single page application project on cat breeds, I was able to test my ability to consume information from an API, create contexts and work with a router. ",
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
            <NetworkIcons
              kind="github"
              isDarkBackground={true}
              css="w-8 h-8"
            />
          }
          target="_blank"
          css="self-center w-[30px]"
        />
        <Link
          href="https://cat-wiki-loic.netlify.app/"
          target="_blanck"
          content={<NetworkIcons kind="website" isDarkBackground={true} />}
        />
      </>
    ),
  },
];
