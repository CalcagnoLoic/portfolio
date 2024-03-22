import { Projects } from "../types/interface";

import Link from "../components/Link";
import NetworkIcons from "../icons/NetworkIcons";
import SkillsIcons from "../icons/SkillsIcons";

export const Professional: Projects[] = [
  {
    id: "?ijhfm*",
    projectIllustration: "assets/img/dictionary.png",
    projectTitle: "Dictionary webapp",
    projectDescription:
      "This online dictionary was powered by CDD. With this dictionary, the user can find a plethora of definitions by syntactic genre as well as hear the pronunciation of the word. ",
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
          target="_blanck"
          content={<NetworkIcons kind="website" isDarkBackground={false} />}
        />
        <Link
          href="https://65c4faea26944c656f6474a3-sfiofbresk.chromatic.com/"
          target="_blanck"
          content={<NetworkIcons kind="storybook" />}
        />
      </>
    ),
  },
  {
    id: "d%u^piq",
    projectIllustration: "assets/img/sneakers.png",
    projectTitle: "E-commerce sneakers",
    projectDescription:
      "This ecommerce application was built using the Component Design Development concept and Storybook. A context allows you to add and remove items from the shopping cart.",
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
          target="_blanck"
          content={<NetworkIcons kind="website" isDarkBackground={false} />}
        />
        <Link
          href="https://65b3f7c0ccbf56939b38309a-gyhhowhxyz.chromatic.com/"
          target="_blanck"
          content={<NetworkIcons kind="storybook" />}
        />
      </>
    ),
  },
  {
    id: "j*o2ky$",
    projectIllustration: "assets/img/password-generator.png",
    projectTitle: "Password generator",
    projectDescription:
      "Typescript application to generate a random password. The user can include upper/lower case letters, numbers and symbols. The strength of the password is also notified.",
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
          target="_blanck"
          content={<NetworkIcons kind="website" isDarkBackground={false} />}
        />
      </>
    ),
  },
];
