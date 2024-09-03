export type navLinkProps = {
  name: string;
  link: string;
};

interface ElementProps {
  css?: string;
  content?: string | JSX.Element;
  id?: string;
}

export type Stack = {
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
  css?: string;
  target?: string;
};

type ProjectLink = {
  href: string;
  kind: "github" | "website";
  css: string;
};

export type Project = {
  projectId: string;
  projectIllustration: string;
  projectWebsite: string;
  projectTitle: string;
  projectStatus: boolean;
  projectStack: string[];
  projectLink: ProjectLink[];
};
