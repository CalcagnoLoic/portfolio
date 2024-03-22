type LinkProps = {
  css?: string;
  content: string | React.ReactNode;
  href?: string;
  target?: string;
};

const Component = ({ css, content, href, target }: LinkProps) => (
  <a href={href} target={target} rel="noreferrer" className={css}>
    {content}
  </a>
);

export default Component;
