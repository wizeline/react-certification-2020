// React
import React from 'react';
// Theme
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../providers/theme';
import VideosProvider from '../../providers/Videos/Videos.provider';
// Components
import AppBar from '../common/AppBar';
// Styles
import { MainContainer } from './styles';
// Hooks
import { useVideosData } from '../../utils/hooks/useVideos';

function Layout({ children }) {
  const { theme } = useTheme();
  const { videos } = useVideosData();

  return (
    <ThemeProvider theme={theme}>
      <VideosProvider value={videos}>
        <AppBar />
        <MainContainer>{children}</MainContainer>
      </VideosProvider>
    </ThemeProvider>
  );
}

export default Layout;
