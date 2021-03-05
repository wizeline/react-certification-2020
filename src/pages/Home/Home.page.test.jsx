// React
import React from 'react';
// Testing
import { screen, render } from '@testing-library/react';
// Components
import HomePage from './Home.page';

describe('Home Page', () => {
  beforeEach(() => {
    render(<HomePage />);
  });
  test('welcome text', () => {
    expect(screen.getByText('Welcome to the Challenge!')).toBeInTheDocument();
  });
});
