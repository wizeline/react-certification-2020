import React from "react";
import MainMenu from "../MainMenu";

import "./Layout.styles.css";

function Layout({ children }) {
  return (
    <div>
      <MainMenu />
      <main className="container">{children}</main>);
    </div>
  );
}

export default Layout;
