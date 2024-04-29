import { HeadingProps } from "../../types/interface";

const Typographies = ({ kind, content, css, id }: HeadingProps) => {
  switch (kind) {
    case "h1":
      return <h1 className={css}>{content}</h1>;

    case "h2":
      return (
        <h2 className={css} id={id}>
          {content}
        </h2>
      );

    case "h3":
      return (
        <h3 className={css} id={id}>
          {content}
        </h3>
      );

    default:
      return null;
  }
};

export default Typographies;
