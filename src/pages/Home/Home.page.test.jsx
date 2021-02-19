// React
import React from 'react';
// Testing
import { screen, render } from '@testing-library/react';
// Redux
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from '../../store';
// JSON
import mokup from '../../json/youtube-mokup';
// Components
import HomePage from './Home.page';

describe('Home Page', () => {
  const { items } = mokup;
  beforeEach(() => {
    const store = configureStore();
    render(
      <ReduxProvider store={store}>
        <HomePage />
      </ReduxProvider>
    );
  });
  test('the data it should be an array', () => {
    expect(Array.isArray(items)).toBe(true);
  });
  test('the data it should be an array with content', () => {
    expect(items.length > 0).toBe(true);
  });
  test('welcome text', () => {
    expect(screen.getByText('Welcome to the Challenge!')).toBeInTheDocument();
  });
});
