import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="layout">
      <Header className="navbar" />
      <div className="content">{props.children}</div>
      <Footer className="footer" />
    </div>
  );
};

export default Layout;
