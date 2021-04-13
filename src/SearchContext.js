import  { createContext } from "react";

 const ThemeContext = createContext({
    darkMode: false,
    setDarkMode: (dark) => {}
});

export default ThemeContext;