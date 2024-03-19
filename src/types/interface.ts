interface Typographies {
  css: string;
  content: string | JSX.Element;
  id?: string;
}

export interface HeadingProps extends Typographies {
  kind: "h1" | "h2" | "h3";
}

export interface ParagraphProps extends Typographies {
  kind: "span" | "p";
}
