// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './store';
// Components
import App from './components/App';
// Styles
import './global.css';

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
