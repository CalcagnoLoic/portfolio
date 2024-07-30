import { Projects } from "@definitions/definitions";

import Link from "@components/Link";
import NetworkIcons from "@icons/NetworkIcons";
import SkillsIcons from "@icons/SkillsIcons";

export const Experimentation: Projects[] = [
  {
    id: "*YooA7N",
    inProgress: false,
    projectIllustration: "assets/img/crowdfund.webp",
    projectTitle: "Crowdfunding webapp",
    projectDescription:
      "Explore this participatory funding product page where users can select offers to increase funding and bookmark products they wish to support. Built with React, TypeScript, and TailwindCSS.",
    projectStack: (
      <>
        <SkillsIcons kind="react" />
        <SkillsIcons kind="ts" />
        <SkillsIcons kind="storybook" />
        <SkillsIcons kind="tw" />
      </>
    ),
    projectWebsite: "https://calcagnoloic.github.io/crowdfunding-webapp/",
    projectLink: (
      <>
        <Link
          href="https://github.com/CalcagnoLoic/crowdfunding-webapp"
          content={
            <NetworkIcons kind="github" isDarkBackground={true} css="w-8 h-8" />
          }
          target="_blank"
          css="self-center w-[30px]"
          aria="Go to github repository"
        />

        <Link
          href="https://calcagnoloic.github.io/crowdfunding-webapp/"
          target="_blank"
          aria="Go to website"
          content={<NetworkIcons kind="website" isDarkBackground={true} />}
        />
        <Link
          href="https://65fea557005e1e6abef7c259-mskecrihhi.chromatic.com"
          target="_blank"
          aria="Go to chromatic project"
          content={<NetworkIcons kind="storybook" isDarkBackground={true} />}
        />
      </>
    ),
  },
  {
    id: "1nh-soc",
    inProgress: false,
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
          aria="Go to github repository"
        />
        <Link
          href="https://calcagnoloic.github.io/calculator/"
          target="_blank"
          aria="Go to website"
          content={<NetworkIcons kind="website" isDarkBackground={true} />}
        />
      </>
    ),
  },
  {
    id: "p@7l59k",
    inProgress: false,
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
          aria="Go to github repository"
        />
        <Link
          href="https://calcagnoloic.github.io/box_shadow_generator/"
          target="_blank"
          aria="Go to website"
          content={<NetworkIcons kind="website" isDarkBackground={true} />}
        />
      </>
    ),
  },
];
