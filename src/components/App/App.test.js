import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('renders welcome message', () => {
    render(<App />);
    expect(screen.getByText('Welcome to the Challenge!')).toBeInTheDocument();
  });
});