import React from 'react';
import App from './App.component';
import { render, screen } from '@testing-library/react';

describe('App', () => { 
  it('renders welcome message', () => {
    render(<App />);
    expect(screen.getByText('Welcome to the Challenge!')).toBeInTheDocument();
  });
});

describe('App component', () => {
  it(`contains the whole app in one child`, () => {
    const { container } = render(<App />);

    expect(container.children.length).toBe(1);
  });
});