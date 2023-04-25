import { ReactNode } from "react";

//
import Header from "./Layout.Header";
import Footer from "./Layout.Footer";

//
const Layout = ({ children }: { children?: ReactNode }) => (
  <>
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <Header />
      {children}
      <Footer />
    </div>
  </>
);
export default Layout;
