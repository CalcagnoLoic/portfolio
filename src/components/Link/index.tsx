import { LinkProps } from "../../types/interface";

const Component = ({ css, content, href, target }: LinkProps) => (
  <a href={href} target={target} rel="noreferrer" className={css}>
    {content}
  </a>
);

export default Component;
