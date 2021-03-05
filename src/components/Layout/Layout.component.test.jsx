// React
import React from 'react';
// Testing
import { render, screen } from '@testing-library/react';
import ThemeBaseProvider from '../../providers/theme';
import Layout from './Layout.component';

describe('Layout', () => {
  it('renders itself', () => {
    render(
      <ThemeBaseProvider>
        <Layout />
      </ThemeBaseProvider>
    );
    const main = screen.getByRole('main');
    expect(main.childElementCount).toBe(0);
    expect(screen.getAllByRole('main').length).toEqual(1);
    expect(screen.getAllByRole('button').length).toEqual(1);
  });
});
