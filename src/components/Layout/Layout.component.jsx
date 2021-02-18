// React
import React, { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Theme
import { ThemeProvider } from 'styled-components';
// Actions
import themeActions from '../../store/theme/actions';
// Selectors
import selectors from '../../store/theme/selectors';
// Components
import AppBar from '../common/AppBar';
// Styles
import { MainContainer } from './styles';

function Layout({ children }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => selectors.selectTheme(state));

  useEffect(() => {
    dispatch(themeActions.load());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <MainContainer>{children}</MainContainer>
    </ThemeProvider>
  );
}

export default Layout;
