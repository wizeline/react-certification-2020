import  { createContext } from "react";

 const ThemeContext = createContext({
    darkMode: false,
    setDarkMode: (dark) => {},
    valueFinal: 'wizeline',
    setValueFinal: (value) => {}
});

export default ThemeContext;