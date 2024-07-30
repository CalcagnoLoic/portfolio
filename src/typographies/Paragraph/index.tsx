import { ParagraphProps } from "@definitions/definitions";

const Typographies = ({ kind, css, content }: ParagraphProps) => {
  switch (kind) {
    case "span":
      return <span className={css}>{content}</span>;
    case "p":
      return <p className={css}>{content}</p>;

    default:
      return null;
  }
};

export default Typographies;
