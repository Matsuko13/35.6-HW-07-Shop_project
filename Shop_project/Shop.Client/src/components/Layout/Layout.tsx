import { FunctionComponent, ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./Layout.css";

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
