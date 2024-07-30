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
    | "fastapi"
    | "docker"
    | "django"
    | "git"
    | "redux"
    | "react-router"
    | "astro"
    | "next"
    | "actions";
  bgLight?: boolean;
}

export interface GeneralIconsProps extends ElementProps {
  kind:
    | "design"
    | "database"
    | "mobile"
    | "tablet"
    | "computer"
    | "practise"
    | "goback"
    | "send";
}

export interface Projects {
  id: string;
  inProgress: boolean;
  projectIllustration: string;
  projectTitle: string;
  projectDescription: string;
  projectStack: React.ReactNode;
  projectWebsite: string;
  projectLink: React.ReactNode;
}

export interface ContactInformationProps {
  icon: string;
  content: string | JSX.Element;
}

export interface InputFieldProps {
  css?: string;
  content?: string;
  isLabel: boolean;
  type?: string;
  isTextArea: boolean;
  placeholder?: string;
  inputCSS?: string;
  name?: string;
  value?: string;
  onChange?: (
    newValue: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export interface LinkProps {
  css?: string;
  content: string | React.ReactNode;
  href?: string;
  target?: string;
  aria?: string;
}

export interface HandleChange {
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  callback: (newValue: string) => void;
}

export interface ValidateForm {
  name: string;
  email: string;
  message: string;
}

export interface ErrorField {
  NameEmpty: string;
  EmailEmpty: string;
  EmailFormat: string;
  MessageEmpty: string;
}

export interface FieldInput {
  state: string;
  setState: (state: string) => void;
  isValid: boolean;
  errorMessage: string;
}

export interface MailFormatField extends FieldInput {
  errorFormatField: string;
}

export type navItem = {
  id: string;
  content: string;
  href: string;
};

export type Skills = {
  id: string;
  skillsTitle: string;
  skillsIcons: React.ReactNode;
  skillsPresentation: string;
  skills: React.ReactNode;
};

export type useClickOutsideProps = {
  callback: (newValue: boolean) => void;
  ref: React.RefObject<HTMLDivElement>;
};

export type UseShouldOverflowProps = {
  state: boolean;
};

export type IconProps = {
  isOpen: boolean;
  handleClick: React.MouseEventHandler<SVGSVGElement>;
};

export type NetworkIconsProps = {
  kind: "linkedin" | "github" | "gmail" | "website" | "storybook";
  isDarkBackground?: boolean;
  css?: string;
};

export type LayoutProps = {
  children: JSX.Element | JSX.Element[];
  css: string;
};

export type handleMoreProjectType = (
  setState: React.Dispatch<React.SetStateAction<number>>,
) => void;

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}
