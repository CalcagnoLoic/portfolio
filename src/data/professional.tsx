import { Projects } from "@definitions/definitions";

import Link from "@components/Link/Link";
import NetworkIcons from "@icons/NetworkIcons/NetworkIcons";
import SkillsIcons from "@icons/SkillsIcons/SkillsIcons";

export const Professional: Projects[] = [
  {
    id: "25A#za9",
    category: "react-native-project",
    inProgress: true,
    projectIllustration: "assets/img/pokenative.webp",
    projectTitle: "PokeNative",
    projectDescription:
      "Découvrez  mon tout premier projet mobile en React Native. Cette application sur l'univers des pokemons vous permettra d'obtenir plein d'informations sur vos monstres préférés!",
    projectStack: (
      <>
        <SkillsIcons kind="react" />
        <SkillsIcons kind="ts" />
        <SkillsIcons kind="tw" />
      </>
    ),
    projectWebsite: "https://github.com/CalcagnoLoic/pokeNative",
    projectLink: (
      <>
        <Link
          href="https://github.com/CalcagnoLoic/pokeNative"
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
          href="https://github.com/CalcagnoLoic/pokeNative"
          target="_blank"
          aria="Go to website"
          content={<NetworkIcons kind="website" isDarkBackground={false} />}
        />
      </>
    ),
  },
/*   {
    id: "d$i1mf*",
    category: "express-project",
    inProgress: false,
    projectIllustration: "assets/img/hackathon.webp",
    projectTitle: "Projet Hackathon",
    projectDescription:
      "Durant le hackathon Odoo, j'ai pu m'occuper de la partie ExpressJS de ce SaaS à destinations des enfants TDAH. Une multitude d'activités y sont présentes afin d'aider ces derniers. Le username/mots de passe factices sont admin ;)",
    projectStack: (
      <>
        <SkillsIcons kind="react" />
        <SkillsIcons kind="expressjs" />
        <SkillsIcons kind="docker" />
        <SkillsIcons kind="sass" />
      </>
    ),
    projectWebsite: "http://35.241.147.228/",
    projectLink: (
      <>
        <Link
          href="https://github.com/Escanor1986/odoo-hackathon"
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
          href="http://35.241.147.228/"
          target="_blank"
          aria="Go to website"
          content={<NetworkIcons kind="website" isDarkBackground={false} />}
        />
      </>
    ),
  }, */
  {
    id: "d$i1mf*",
    category: "next-project",
    inProgress: false,
    projectIllustration: "assets/img/catwiki.webp",
    projectTitle: "CatWiki",
    projectDescription:
      "Bienvenue aux amoureux des chats sur ce site, où vous pourrez découvrir les caractéristiques de vos races préférées. Vous y trouverez également un article sur les raisons d'adopter un chat.",
    projectStack: (
      <>
        <SkillsIcons kind="next" />
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
    category: "astro-project",
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
    category: "react-project",
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
    category: "react-project",
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
    category: "typescript-project",
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
