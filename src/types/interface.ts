interface ElementProps {
  css?: string;
  content?: string | JSX.Element;
  id?: string;
}

export interface HeadingProps extends ElementProps {
  kind: "h1" | "h2" | "h3";
}

export interface ParagraphProps extends ElementProps {
  kind: "span" | "p";
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
    | "docker"
    | "django"
    | "git"
    | "redux"
    | "react-router";
}

export interface GeneralIconsProps extends ElementProps {
  kind: "design" | "database" | "mobile" | "tablet" | "computer" | "practise";
}

export interface Projects {
  id: string;
  projectIllustration: string;
  projectTitle: string;
  projectDescription: string;
  projectStack: React.ReactNode;
  projectWebsite: string;
  projectLink: React.ReactNode;
}
