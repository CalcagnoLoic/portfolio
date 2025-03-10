import { LayoutProps } from "@definitions/definitions";

const Layout = ({ children, css }: LayoutProps) => (
  <section className={`px-6 xl:px-32 ${css}`}>{children}</section>
);

export default Layout;
