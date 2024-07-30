import { Skills } from "@definitions/definitions";

import GeneralIcons from "@icons/GeneralIcons";
import SkillsIcons from "@icons/SkillsIcons";

export const skills: Skills[] = [
  {
    id: "oXeqm6s",
    skillsTitle: "Frontend",
    skillsIcons: <GeneralIcons kind="design" />,
    skillsPresentation:
      "I offer my expertise in accurately translating frontend designs from Figma prototypes, as well as crafting custom designs aligned with specific design guidelines and principles.",
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
      "I offer services with the ability to implement architectural patterns, including MVC and MVT. Moreover, I am proficient in using containers to enhance application management and ensure portability.",
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
    skillsTitle: "Best Practice",
    skillsIcons: <GeneralIcons kind="practise" />,
    skillsPresentation:
      "In every project, I focus on mobile-first development, scalability and unit test automation. In addition, I apply Git for version control and teamwork for efficient code base management.",
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
