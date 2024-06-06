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
    | "astro";
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
    | "goback";
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
  field1: string;
  field2: string;
  field3: string;
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
