import React, { useLayoutEffect, useReducer, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import VideoDetail from '../../pages/VideoDetail';
import FavoriteVideos from '../../pages/FavoriteVideos';
// import Private from '../Private';
// import Layout from '../Layout';
import VideoReducer from '../../store/VideoReducer';
import VideoContext from '../../store/VideoContext';
import Navbar from '../Navbar';
import Private from '../Private';

import { random } from '../../utils/fns';

function App() {
  const [inputState, setInputState] = useState();

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
    <AuthProvider>
      <BrowserRouter>
        <VideoContext.Provider value={{ state, dispatch }}>
          <Navbar setInputState={setInputState} />
          <Switch>
            <Route exact path="/">
              <HomePage inputState={inputState} />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/detail">
              <VideoDetail />
            </Route>
            <Private exact path="/favorites">
              <FavoriteVideos />
            </Private>
          </Switch>
        </VideoContext.Provider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
