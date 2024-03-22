import GeneralIcons from "../icons/GeneralIcons";
import SkillsIcons from "../icons/SkillsIcons";

type Skills = {
  id: number;
  skillsTitle: string;
  skillsIcons: React.ReactNode;
  skillsPresentation: string;
  skills: React.ReactNode;
};

export const skills: Skills[] = [
  {
    id: 1,
    skillsTitle: "Frontend",
    skillsIcons: <GeneralIcons kind="design" />,
    skillsPresentation:
      "I offer my expertise in accurately translating frontend designs from Figma prototypes, as well as crafting custom designs aligned with specific design guidelines and principles.",
    skills: (
      <>
        <SkillsIcons kind="react" />
        <SkillsIcons kind="ts" />
        <SkillsIcons kind="js" />
        <SkillsIcons kind="storybook" />
        <SkillsIcons kind="tw" />
      </>
    ),
  },
  {
    id: 2,
    skillsTitle: "Backend",
    skillsIcons: <GeneralIcons kind="database" />,
    skillsPresentation:
      "I offer services with the ability to implement MVT architectures. Moreover, I am familiar with the use of containers to enhance application management and ensure their portability.",
    skills: (
      <>
        <SkillsIcons kind="python" />
        <SkillsIcons kind="django" />
        <SkillsIcons kind="flask" />
        <SkillsIcons kind="docker" />
        <SkillsIcons kind="sql" />
      </>
    ),
  },
  {
    id: 3,
    skillsTitle: "Best Practice",
    skillsIcons: <GeneralIcons kind="practise" />,
    skillsPresentation:
      "In every project, I emphasize mobile-first development and scalability. Additionally, I excel in Git for version control and effective teamwork for efficient codebase management.",
    skills: (
      <>
        <SkillsIcons kind="git" />
        <GeneralIcons kind="mobile" />
        <GeneralIcons kind="tablet" />
        <GeneralIcons kind="computer" />
      </>
    ),
  },
];
