import Footer from "./footer/Footer";
import Header from "./header/Header";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container-fluid">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
