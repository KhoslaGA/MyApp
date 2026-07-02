import NavNew from "./NavNew";
import FooterNew from "./FooterNew";

const PageShell = ({ children }) => (
  <>
    <NavNew />
    <main>{children}</main>
    <FooterNew />
  </>
);

export default PageShell;
