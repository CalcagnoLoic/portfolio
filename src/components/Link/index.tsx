import { LinkProps } from "../../types/interface";

const Component = ({ css, content, href, target, aria }: LinkProps) => (
  <a href={href} target={target} rel="noreferrer" className={css} aria-label={aria}>
    {content}
  </a>
);

export default Component;
