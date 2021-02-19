// React
import React from 'react';
// Theme
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../providers/theme';
// Components
import AppBar from '../common/AppBar';
// Styles
import { MainContainer } from './styles';

function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <MainContainer>{children}</MainContainer>
    </ThemeProvider>
  );
}

export default Layout;
