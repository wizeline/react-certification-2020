import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import MainMenu from "../MainMenu";

import "./Layout.styles.css";

const commontheme = {
  fontFam: "monospace",
};

const lightTheme = {
  ...commontheme,
  bg: "#fff",
  text: "#121212",
};

const darkTheme = {
  ...commontheme,
  bg: "#121212",
  text: "#fff",
};

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fontFam};
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.bg};

    transition: 0.5s;
  }
`;

function Layout({ children }) {
  const [mode, setMode] = useState("light");

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <MainMenu onSetMode={(theme) => setMode(theme)} />
        <main className="container">{children}</main>);
      </div>
    </ThemeProvider>
  );
}

export default Layout;
