import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AuthProvider from "../../providers/Auth";
import HomePage from "../../pages/Home";
import LoginPage from "../../pages/Login";
import Video from "../../pages/Video";
import NotFound from "../../pages/NotFound";
import Favorites from "../../pages/Favorites";
import Private from "../Private";
import Layout from "../Layout";

const App = () => {
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
              <Favorites onSetActiveVideo={(video) => setActiveVideo(video)} />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
