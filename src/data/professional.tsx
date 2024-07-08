import { Projects } from "../types/interface";

import Link from "../components/Link";
import NetworkIcons from "../icons/NetworkIcons";
import SkillsIcons from "../icons/SkillsIcons";

export const Professional: Projects[] = [
  {
    id: "d$i1mf*",
    inProgress: true,
    projectIllustration: "assets/img/catwiki.webp",
    projectTitle: "CatWiki",
    projectDescription:
      "CatWiki is evolving! Currently migrating from a ReactJS (actually hosted) to a NextJS application for enhanced performance and SEO benefits. Stay tuned for the upcoming release.",
    projectStack: (
      <>
        <div className="rounded bg-white px-1">
          <SkillsIcons kind="next" />
        </div>
        <SkillsIcons kind="ts" />
        <SkillsIcons kind="tw" />
      </>
    ),
    projectWebsite: "https://cat-wiki-loic.netlify.app/",
    projectLink: (
      <>
        <Link
          href="https://github.com/CalcagnoLoic/catwiki/tree/migrating-nextjs"
          content={
            <NetworkIcons
              kind="github"
              isDarkBackground={false}
              css="w-8 h-8"
            />
          }
          target="_blank"
          css="self-center w-[30px]"
          aria="Go to github repository"
        />
        <Link
          href="https://cat-wiki-loic.netlify.app/"
          target="_blank"
          aria="Go to website"
          content={<NetworkIcons kind="website" isDarkBackground={false} />}
        />
      </>
    ),
  },
  {
    id: "25A#za9",
    inProgress: true,
    projectIllustration: "assets/img/invoice-app.webp",
    projectTitle: "Invoice App",
    projectDescription:
      "Check out my new fullstack project soon! However, you can now launch it on your local machines (procedures available in the readme). See the two github icons below",
    projectStack: (
      <>
        <SkillsIcons kind="react" />
        <div className="rounded bg-white px-1">
          <SkillsIcons kind="react-router" />
        </div>
        <SkillsIcons kind="python" />
        <SkillsIcons kind="fastapi" />
        <SkillsIcons kind="docker" />
      </>
    ),
    projectWebsite: "https://github.com/CalcagnoLoic/invoice-app-web",
    projectLink: (
      <>
        <Link
          href="https://github.com/CalcagnoLoic/invoice-app-web"
          aria="Go to the github page for to access frontend"
          content={
            <NetworkIcons
              kind="github"
              isDarkBackground={false}
              css="w-8 h-8"
            />
          }
          target="_blank"
          css="self-center w-[30px]"
        />
        <Link
          href="https://github.com/CalcagnoLoic/invoice-app-server"
          aria="Go to the github page for to access backend"
          content={
            <NetworkIcons
              kind="github"
              isDarkBackground={false}
              css="w-8 h-8"
            />
          }
          target="_blank"
          css="self-center w-[30px]"
        />
      </>
    ),
  },
  {
    id: "?ZxC*Hi",
    inProgress: false,
    projectIllustration: "assets/img/planets-fact.webp",
    projectTitle: "Planets fact",
    projectDescription:
      "Dive into the properties of our solar system's planets with this interactive SPA. Built with AstroJS, this application offers a detailed exploration of each planet's characteristics.",
    projectStack: (
      <>
        <SkillsIcons kind="astro" bgLight={false} />
        <SkillsIcons kind="react" />
        <SkillsIcons kind="ts" />
        <SkillsIcons kind="tw" />
      </>
    ),
    projectWebsite: "https://calcagnoloic.github.io/planets-fact/",
    projectLink: (
      <>
        <Link
          href="https://github.com/CalcagnoLoic/planets-fact"
          content={
            <NetworkIcons
              kind="github"
              isDarkBackground={false}
              css="w-8 h-8"
            />
          }
          target="_blank"
          css="self-center w-[30px]"
          aria="Go to github repository"
        />
        <Link
          href="https://calcagnoloic.github.io/planets-fact/"
          target="_blank"
          aria="Go to website"
          content={<NetworkIcons kind="website" isDarkBackground={false} />}
        />
      </>
    ),
  },
  {
    id: "?ijhfm*",
    inProgress: false,
    projectIllustration: "assets/img/dictionary.webp",
    projectTitle: "Dictionary webapp",
    projectDescription:
      "Access a plethora of word definitions and pronunciations with this online dictionary. Built with React and TypeScript, it leverages modern web technologies for a seamless user experience.",
    projectStack: (
      <>
        <SkillsIcons kind="react" />
        <SkillsIcons kind="ts" />
        <SkillsIcons kind="storybook" />
        <SkillsIcons kind="tw" />
      </>
    ),
    projectWebsite: "https://calcagnoloic.github.io/dictionary-webapp/",
    projectLink: (
      <>
        <Link
          href="https://github.com/CalcagnoLoic/dictionary-webapp"
          content={
            <NetworkIcons
              kind="github"
              isDarkBackground={false}
              css="w-8 h-8"
            />
          }
          target="_blank"
          css="self-center w-[30px]"
          aria="Go to github repository"
        />

        <Link
          href="https://calcagnoloic.github.io/dictionary-webapp/"
          target="_blank"
          aria="Go to website"
          content={<NetworkIcons kind="website" isDarkBackground={false} />}
        />
        <Link
          href="https://65c4faea26944c656f6474a3-sfiofbresk.chromatic.com/"
          target="_blank"
          aria="Go to chromatic project"
          content={<NetworkIcons kind="storybook" />}
        />
      </>
    ),
  },
  {
    id: "d%u^piq",
    inProgress: false,
    projectIllustration: "assets/img/sneakers.webp",
    projectTitle: "E-commerce sneakers",
    projectDescription:
      "Shop for sneakers in this e-commerce application built with Component Design Development and Storybook. Features include adding and removing items from the cart using React context.",
    projectStack: (
      <>
        <SkillsIcons kind="react" />
        <SkillsIcons kind="ts" />
        <SkillsIcons kind="storybook" />
        <SkillsIcons kind="tw" />
      </>
    ),
    projectWebsite: "https://calcagnoloic.github.io/ecommerce-sneakers/",
    projectLink: (
      <>
        <Link
          href="https://github.com/CalcagnoLoic/ecommerce-sneakers"
          content={
            <NetworkIcons
              kind="github"
              isDarkBackground={false}
              css="w-8 h-8"
            />
          }
          target="_blank"
          css="self-center w-[30px]"
          aria="Go to github repository"
        />

        <Link
          href="https://calcagnoloic.github.io/ecommerce-sneakers/"
          target="_blank"
          aria="Go to website"
          content={<NetworkIcons kind="website" isDarkBackground={false} />}
        />
        <Link
          href="https://65b3f7c0ccbf56939b38309a-gyhhowhxyz.chromatic.com/"
          target="_blank"
          aria="Go to chromatic project"
          content={<NetworkIcons kind="storybook" />}
        />
      </>
    ),
  },
  {
    id: "j*o2ky$",
    inProgress: false,
    projectIllustration: "assets/img/password-generator.webp",
    projectTitle: "Password generator",
    projectDescription:
      "Generate random passwords with this TypeScript application. Customize passwords with upper/lowercase letters, numbers, and symbols, and get notified about their strength.",
    projectStack: (
      <>
        <SkillsIcons kind="ts" />
        <SkillsIcons kind="tw" />
      </>
    ),
    projectWebsite: "https://calcagnoloic.github.io/password-generator-app/",
    projectLink: (
      <>
        <Link
          href="https://github.com/CalcagnoLoic/password-generator-app"
          content={
            <NetworkIcons
              kind="github"
              isDarkBackground={false}
              css="w-8 h-8"
            />
          }
          target="_blank"
          css="self-center w-[30px]"
          aria="Go to github repository"
        />

        <Link
          href="https://calcagnoloic.github.io/password-generator-app/"
          target="_blank"
          aria="Go to website"
          content={<NetworkIcons kind="website" isDarkBackground={false} />}
        />
      </>
    ),
  },
];
