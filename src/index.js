import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { ThemeProvider } from '../src/state/theme-context';

ReactDOM.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
