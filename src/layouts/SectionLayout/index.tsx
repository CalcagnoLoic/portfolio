type LayoutProps = {
  children: JSX.Element | JSX.Element[];
  css: string;
};

const Layout = ({ children, css }: LayoutProps) => (
  <section className={css}>{children}</section>
);

export default Layout;
