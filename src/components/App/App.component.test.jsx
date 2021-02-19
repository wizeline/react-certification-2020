// React
import React from 'react';
// Testing
import { render, screen } from '@testing-library/react';
// Redux
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from '../../store';
// Components
import App from './App.component';

describe('App', () => {
  beforeEach(() => {
    const store = configureStore();
    render(
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    );
  });
  it('renders app component', () => {
    expect(screen.getAllByRole('button').length).toEqual(1);
    expect(screen.getAllByRole('main').length).toEqual(1);
    expect(screen.getByText('Welcome to the Challenge!')).toBeInTheDocument();
  });
});
