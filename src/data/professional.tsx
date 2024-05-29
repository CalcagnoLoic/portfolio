import { Projects } from "../types/interface";

import Link from "../components/Link";
import NetworkIcons from "../icons/NetworkIcons";
import SkillsIcons from "../icons/SkillsIcons";

export const Professional: Projects[] = [
  {
    id: "?ZxC*Hi",
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
        />
        <Link
          href="https://calcagnoloic.github.io/planets-fact/"
          target="_blank"
          content={<NetworkIcons kind="website" isDarkBackground={false} />}
        />
      </>
    ),
  },
  {
    id: "*YooA7N",
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
          href="https://calcagnoloic.github.io/crowdfunding-webapp/"
          target="_blank"
          content={<NetworkIcons kind="website" isDarkBackground={false} />}
        />
        <Link
          href="https://65fea557005e1e6abef7c259-mskecrihhi.chromatic.com"
          target="_blank"
          content={<NetworkIcons kind="storybook" />}
        />
      </>
    ),
  },
  {
    id: "?ijhfm*",
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
        />

        <Link
          href="https://calcagnoloic.github.io/dictionary-webapp/"
          target="_blank"
          content={<NetworkIcons kind="website" isDarkBackground={false} />}
        />
        <Link
          href="https://65c4faea26944c656f6474a3-sfiofbresk.chromatic.com/"
          target="_blank"
          content={<NetworkIcons kind="storybook" />}
        />
      </>
    ),
  },
  {
    id: "d%u^piq",
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
        />

        <Link
          href="https://calcagnoloic.github.io/ecommerce-sneakers/"
          target="_blank"
          content={<NetworkIcons kind="website" isDarkBackground={false} />}
        />
        <Link
          href="https://65b3f7c0ccbf56939b38309a-gyhhowhxyz.chromatic.com/"
          target="_blank"
          content={<NetworkIcons kind="storybook" />}
        />
      </>
    ),
  },
  {
    id: "j*o2ky$",
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
        />

        <Link
          href="https://calcagnoloic.github.io/password-generator-app/"
          target="_blank"
          content={<NetworkIcons kind="website" isDarkBackground={false} />}
        />
      </>
    ),
  },
];
