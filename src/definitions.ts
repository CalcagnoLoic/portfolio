export type navLinkProps = {
  name: string;
  link: string;
};


interface ElementProps {
  css?: string;
  content?: string | JSX.Element;
  id?: string;
}

export interface SkillsProps extends ElementProps {
  kind:
    | "react"
    | "ts"
    | "js"
    | "tw"
    | "storybook"
    | "sql"
    | "python"
    | "flask"
    | "fastapi"
    | "docker"
    | "django"
    | "git"
    | "redux"
    | "react-router"
    | "astro"
    | "next"
    | "actions";
}

export type NetworkIconsProps = {
  kind: "linkedin" | "github" | "gmail" | "website" | "storybook";
  isDarkBackground?: boolean;
  css?: string;
  target?: string
};