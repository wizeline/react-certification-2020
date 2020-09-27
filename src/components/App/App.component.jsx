import React, { useLayoutEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AuthProvider from "../../providers/Auth";
import HomePage from "../../pages/Home";
import LoginPage from "../../pages/Login";
import Video from "../../pages/Video";
import NotFound from "../../pages/NotFound";
import Favorites from "../../pages/Favorites";
import Private from "../Private";
import Fortune from "../Fortune";
import Layout from "../Layout";
import { random } from "../../utils/fns";

const App = () => {
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty("--bg-position", `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener("click", rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener("click", rotateBackground);
    };
  }, []);
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage onSetActiveVideo={(video) => setActiveVideo(video)} />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route path="/videos/:id">
              <Video video={activeVideo} />
            </Route>
            <Private exact path="/favorites">
              <Favorites />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Fortune />
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
