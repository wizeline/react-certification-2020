// React
import React, { useState, useEffect, useContext, useCallback } from 'react';
// Utils
import { THEME_SELECTED } from '../../utils/constants';
import { storage } from '../../utils/storage';
// Themes
import light from '../../theme/light';
import dark from '../../theme/dark';

const ThemeContext = React.createContext({ theme: light, selected: false });

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`Can't use "useTheme" without an ThemeProvider!`);
  }
  return context;
};

const ThemeBaseProvider = ({ children }) => {
  const [theme, setTheme] = useState(light);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const lastTheme = storage.get(THEME_SELECTED);
    const whichTheme = lastTheme ? dark : light;
    setSelected(lastTheme);
    setTheme(whichTheme);
  }, []);

  const toggleTheme = useCallback((toggle) => {
    setTheme(toggle ? dark : light);
    storage.set(THEME_SELECTED, toggle);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, selected, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { useTheme, ThemeContext };
export default ThemeBaseProvider;
