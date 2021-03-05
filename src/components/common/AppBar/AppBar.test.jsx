// React
import React from 'react';
// Testing
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// Components
import AppBar from './AppBar';
// Theme Provider
import ThemeBaseProvider from '../../../providers/theme';

describe('AppBar component', () => {
  beforeEach(() => {
    render(
      <ThemeBaseProvider>
        <AppBar />
      </ThemeBaseProvider>
    );
  });
  it('should render and children should be equal to 1', () => {
    const header = screen.getByTestId('header-test');
    expect(header.children.length).toEqual(1);
  });
  test('handle clicks of buttons in navbar', () => {
    const menu = screen.getByTestId('menu-button');
    const toggle = screen.getByTestId('toggle-button');
    const login = screen.getByTestId('login-button');
    userEvent.click(menu, { button: 0 });
    userEvent.click(toggle, { button: 0 });
    userEvent.click(login, { button: 0 });
  });
  test('handle on change of input text', async () => {
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Wizeline');
    expect(input.value).toBe('Wizeline');
  });
});
