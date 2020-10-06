import React, { useLayoutEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import VideoDetail from '../../pages/VideoDetail';
import FavoriteVideos from '../../pages/FavoriteVideos';
import VideosProvider from '../../store/VideoContext';
import Navbar from '../Navbar';
import Private from '../Private';

import { random } from '../../utils/fns';

function App() {
  const [inputState, setInputState] = useState();

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
        <VideosProvider>
          <Navbar setInputState={setInputState} />
          <Switch>
            <Route exact path="/">
              <HomePage inputState={inputState} />
            </Route>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/detail" component={VideoDetail} />
            <Private exact path="/favorites" component={FavoriteVideos} />
          </Switch>
        </VideosProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
