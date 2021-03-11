import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from '../../globalStyles';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import VideoDetails from '../../pages/VideoDetails';
import Private from '../Private';
import Layout from '../Layout';

function App() {
  return (
    <div>
    
      <HashRouter>
      <GlobalStyle />
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="/:id" children={<VideoDetails />} />
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </AuthProvider>
      </HashRouter>
    </div>
  );
}

export default App;
