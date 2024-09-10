import { Skills } from "@definitions/definitions";

import GeneralIcons from "@icons/GeneralIcons";
import SkillsIcons from "@icons/SkillsIcons";

export const skills: Skills[] = [
  {
    id: "oXeqm6s",
    skillsTitle: "Frontend",
    skillsIcons: <GeneralIcons kind="design" />,
    skillsPresentation:
      "J'offre mon expertise dans la reproduction précise des prototypes Figma, ainsi que dans l'élaboration de conceptions personnalisées alignées sur des lignes directrices et des principes de conception spécifiques.",
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
      "Je propose mes services afin de mettre en œuvre des modèles architecturaux, notamment MVC/MVT. En outre, je sais utiliser les conteneurs pour améliorer la gestion des applications et garantir la portabilité.",
    skills: (
      <>
        <SkillsIcons kind="python" />
        <SkillsIcons kind="django" />
        <SkillsIcons kind="flask" />
        <SkillsIcons kind="fastapi" />
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
      "Dans chaque projet, je me concentre sur le développement mobile, l'évolution et l'automatisation des tests unitaires. De plus, l'utilisation de Git permet une gestion efficace du code.",
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
