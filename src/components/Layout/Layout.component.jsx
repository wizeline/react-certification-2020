import React, { useContext, useMemo, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import MainMenu from "../MainMenu";

import "./Layout.styles.css";

const commontheme = {
  fontFam: "monospace",
};

const lightTheme = {
  ...commontheme,
  bg: "#fff",
  text: "#aaa",
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
