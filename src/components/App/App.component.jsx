import React, { useLayoutEffect, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { slide as Menu } from 'react-burger-menu';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import VideoDetail from '../../pages/VideoDetail';
import FavoriteVideos from '../../pages/FavoriteVideos';
// import Private from '../Private';
// import Layout from '../Layout';
import VideoReducer from '../../store/VideoReducer';
import VideoContext from '../../store/VideoContext';

import { random } from '../../utils/fns';

function App() {
  const [state, dispatch] = useReducer(VideoReducer, {
    currentVideo: {},
    favoriteVideos: [],
    videos: [],
    setCurrentVideo: () => {},
    addFavoritevideo: () => {},
    loadFromStorage: () => {},
  });
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <VideoContext.Provider value={{ state, dispatch }}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/detail">
              <VideoDetail />
            </Route>
            <Route exact path="/favorites">
              <FavoriteVideos />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </VideoContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
