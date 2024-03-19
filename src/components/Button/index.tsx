type ButtonProps = {
  kind: "button" | "link";
  css: string;
  content: string;
  href?: string;
  target?: string;
};

const Component = ({ kind, css, content, href, target }: ButtonProps) => {
  if (kind === "button") {
    return (
      <button className={css} type="submit">
        {content}
      </button>
    );
  }

  if (kind === "link") {
    return (
      <a href={href} target={target} rel="noreferrer" className={css}>
        {content}
      </a>
    );
  }
};

export default Component;
