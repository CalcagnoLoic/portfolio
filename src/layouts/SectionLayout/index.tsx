type LayoutProps = {
  children: JSX.Element | JSX.Element[];
  css: string;
};

const Layout = ({ children, css }: LayoutProps) => (
  <section className={`px-12 md:px-32 pt-5 ${css}`}>{children}</section>
);

export default Layout;
