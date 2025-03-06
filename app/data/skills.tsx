import { Skills } from "@/app/definitions/definitions";

import GeneralIcons from "@/app/ui/icons/GeneralIcons";
import SkillsIcons from "@/app/ui/icons/SkillsIcons";

export const skills: Skills[] = [
  {
    id: "oXeqm6s",
    skillsTitle: "Frontend",
    skillsIcons: <GeneralIcons kind="design" />,
    skillsPresentation:
      "Avec une expertise solide en React, je suis également à l’aise avec Next.js et Astro, bien que je les utilise de manière occasionnelle. Je maîtrise pleinement le développement de composants et la gestion d’état. Actuellement, je développe mes compétences en React Native pour aborder le développement d’applications mobiles.",
    skills: (
      <>
        <SkillsIcons kind="react" />
        <div className="rounded bg-white px-1">
          <SkillsIcons kind="next" />
        </div>
        <SkillsIcons kind="astro" bgLight={false} />
        <SkillsIcons kind="ts" />
        <SkillsIcons kind="js" />
        <SkillsIcons kind="storybook" />
        <SkillsIcons kind="tw" />
      </>
    ),
  },
  {
    id: "1sa@9PT",
    skillsTitle: "Backend",
    skillsIcons: <GeneralIcons kind="database" />,
    skillsPresentation:
      "Fort de mon expérience dans le développement backend, j’ai conçu des applications en appliquant des modèles architecturaux comme le MVC. J’ai aussi géré des APIs maison et utilisé Docker pour optimiser la gestion des applications et garantir leur portabilité.",
    skills: (
      <>
        <SkillsIcons kind="python" />
        <SkillsIcons kind="fastapi" />
        <SkillsIcons kind="nodejs" />
        <SkillsIcons kind="docker" />
        <SkillsIcons kind="sql" />
      </>
    ),
  },
  {
    id: "-w*Z4el",
    skillsTitle: "Bonnes pratiques",
    skillsIcons: <GeneralIcons kind="practise" />,
    skillsPresentation:
      "Je mets un accent particulier sur les bonnes pratiques en développement, en garantissant la qualité du code grâce à l'automatisation des tests unitaires et l'utilisation de Git. Mon expérience me permet de garantir une approche structurée et efficace pour chaque étape du cycle de vie d'une application.",
    skills: (
      <>
        <SkillsIcons kind="git" />
        <SkillsIcons kind="actions" />
        <GeneralIcons kind="mobile" />
        <GeneralIcons kind="tablet" />
        <GeneralIcons kind="computer" />
      </>
    ),
  },
];
