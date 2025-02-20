import { Projects } from "@definitions/definitions";

import Link from "@components/Link/Link";
import NetworkIcons from "@icons/NetworkIcons/NetworkIcons";
import SkillsIcons from "@icons/SkillsIcons/SkillsIcons";

export const Experimentation: Projects[] = [
  {
    id: "*YooA7N",
    category: "react-project",
    inProgress: false,
    projectIllustration: "assets/img/crowdfund.webp",
    projectTitle: "Crowdfunding webapp",
    projectDescription:
      "Explorez cette page de produits de financement participatif où les utilisateurs peuvent sélectionner des offres pour augmenter le financement et mettre en signet les produits qu'ils souhaitent soutenir. ",
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
    category: "typescript-project",
    inProgress: false,
    projectIllustration: "assets/img/calculator-app.webp",
    projectTitle: "Calculator app",
    projectDescription:
      "Calculatrice développée pour améliorer mes compétences en TypeScript et en tests unitaires. Le projet suit des pratiques de clean code pour la maintenabilité.",
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
    category: "react-project",
    inProgress: false,
    projectIllustration: "assets/img/box-generator.webp",
    projectTitle: "Boxy generator",
    projectDescription:
      "Créez la propriété CSS box-shadow sans effort avec ce générateur. Ce projet m'a permis d'apprendre l'outil Redux et les concepts de gestion d'état en utilisant React.",
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
