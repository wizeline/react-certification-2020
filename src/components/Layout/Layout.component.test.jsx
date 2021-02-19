// React
import React from 'react';
// Testing
import { render, screen } from '@testing-library/react';
// Redux
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from '../../store';
import ThemeBaseProvider from '../../providers/theme';
import Layout from './Layout.component';

const store = configureStore();

describe('Layout', () => {
  it('renders itself', () => {
    render(
      <ReduxProvider store={store}>
        <ThemeBaseProvider>
          <Layout />
        </ThemeBaseProvider>
      </ReduxProvider>
    );
    const main = screen.getByRole('main');
    expect(main.childElementCount).toBe(0);
    expect(screen.getAllByRole('main').length).toEqual(1);
    expect(screen.getAllByRole('button').length).toEqual(1);
  });
});
