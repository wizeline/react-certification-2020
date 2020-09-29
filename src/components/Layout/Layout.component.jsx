import React, { useContext, useMemo, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import MainMenu from "../MainMenu";

import "./Layout.styles.css";

const commontheme = {
  fontFam: "monospace",
};

const lightTheme = {
  ...commontheme,
  bg: "#e3dae7",
  hover: "#d3b3b8",
  link: "#714d69",
  menuBg: "#a0849d",
  text: "#aaa",
};

const darkTheme = {
  ...commontheme,
  bg: "#43b5a0",
  hover: "#fa448c",
  link: "#491d88",
  menuBg: "#fec859",
  text: "#fff",
};

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fontFam};
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.bg};
    
    a {
      color: ${(props) => props.theme.link};
    }

    a:hover {
      color: ${(props) => props.theme.hover};
    }

    .component__main-menu {
      background-color: ${(props) => props.theme.menuBg}
    }
  }
`;

const QueryContext = React.createContext([{}, () => {}]);

export const useQueryContext = () => {
  const context = useContext(QueryContext);

  if (!context) {
    throw new Error("useQueryContext is not present");
  }

  return context;
};

const Layout = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [queryString, setQueryString] = useState("Wizeline");

  const contextValue = useMemo(() => ({ queryString, setQueryString }), [
    queryString,
    setQueryString,
  ]);

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <MainMenu
          onSetMode={(theme) => setMode(theme)}
          queryString={queryString}
          onSearch={(qs) => setQueryString(qs)}
        />
        <QueryContext.Provider value={contextValue}>
          <main className="container">{children}</main>
        </QueryContext.Provider>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
