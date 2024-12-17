import { Projects } from "@definitions/definitions";

import Link from "@components/Link/Link";
import NetworkIcons from "@icons/NetworkIcons/NetworkIcons";
import SkillsIcons from "@icons/SkillsIcons/SkillsIcons";

export const Professional: Projects[] = [
  /*   {
    id: "25A#za9",
    inProgress: true,
    projectIllustration: "assets/img/invoice-app.webp",
    projectTitle: "Invoice App",
    projectDescription:
      "Découvrez bientôt mon nouveau projet fullstack ! Cependant, vous pouvez le lancer sur vos machines locales (procédures disponibles dans le readme). Voir les deux icônes github ci-dessous.",
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
  }, */
  {
    id: "d$i1mf*",
    inProgress: false,
    projectIllustration: "assets/img/catwiki.webp",
    projectTitle: "CatWiki",
    projectDescription:
      "Bienvenue aux amoureux des chats sur ce site, où vous pourrez découvrir les caractéristiques de vos races préférées. Vous y trouverez également un article sur les raisons d'adopter un chat.",
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
          href="https://github.com/CalcagnoLoic/catwiki/"
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
    id: "?ZxC*Hi",
    inProgress: false,
    projectIllustration: "assets/img/planets-fact.webp",
    projectTitle: "Planets fact",
    projectDescription:
      "Plongez dans les propriétés des planètes de notre système solaire avec cette SPA. Construite avec AstroJS, ce site offre une exploration détaillée des caractéristiques de chaque planète.",
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
      "Accédez à une pléthore de définitions et de prononciations de mots avec ce dictionnaire en ligne. Construit avec React et TypeScript, il tire parti des technologies web modernes.",
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
      "Achetez des baskets dans cet e-commerce construit avec le CDD et Storybook. Les fonctionnalités incluent l'ajout et la suppression d'articles du panier en utilisant le contexte React.",
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
      "Générez des mots de passe aléatoires! Personnalisez vos mots de passe avec des lettres majuscules/minuscules, des chiffres et des symboles, et soyez informé de leur force.",
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
