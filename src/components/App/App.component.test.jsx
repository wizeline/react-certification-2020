// React
import React from 'react';
// Testing
import { render, screen } from '@testing-library/react';
// Components
import App from './App.component';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });
  it('renders app component', () => {
    expect(screen.getAllByRole('button').length).toEqual(1);
    expect(screen.getAllByRole('main').length).toEqual(1);
    expect(screen.getByText('Welcome to the Challenge!')).toBeInTheDocument();
  });
});
