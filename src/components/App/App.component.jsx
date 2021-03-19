import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from '../../globalStyles';
import { ThemeContext } from '../../state/theme-context';

import AuthProvider from '../../providers/Auth';
import SearchVideoProvider from '../../providers/VideoSearch';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import VideoDetails from '../../pages/VideoDetails';
import Private from '../Private';
import Layout from '../Layout';

function App() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div>
      <HashRouter>
      <GlobalStyle backgroundColor= {theme.backgroundColor} color= {theme.color} />
        <AuthProvider>
        <SearchVideoProvider> 
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
        </SearchVideoProvider>
        </AuthProvider>
      </HashRouter>
    </div>
  );
}

export default App;
