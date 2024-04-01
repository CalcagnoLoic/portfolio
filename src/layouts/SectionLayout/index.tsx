type LayoutProps = {
  children: JSX.Element | JSX.Element[];
  css: string;
};

const Layout = ({ children, css }: LayoutProps) => (
  <section className={`px-8 md:px-32 ${css}`}>{children}</section>
);

export default Layout;
