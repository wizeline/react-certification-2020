import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeBaseProvider, { useTheme } from '.';

describe('ThemeProvider', () => {
  const TestComponent = () => {
    const { theme, selected, toggleTheme } = useTheme();
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
      toggleTheme(!toggle);
      setToggle(!toggle);
    };
    return (
      <>
        <button
          data-testid="test"
          type="button"
          onClick={() => handleToggle()}
          style={{ color: theme.palette.primary.main }}
        >
          {selected ? 'dark' : 'light'}
        </button>
      </>
    );
  };
  it('Returns theme name and provides primary color', () => {
    render(
      <ThemeBaseProvider>
        <TestComponent />
      </ThemeBaseProvider>
    );
    const test = screen.getByTestId('test');
    expect(test).toHaveTextContent('light');
    expect(getComputedStyle(test).color).toBe('rgb(28, 84, 118)');
    userEvent.click(test, { button: 0 });
  });
  it('Fails because we are using it without a provider', () => {
    render(<TestComponent />);
    const test = screen.getByTestId('test');
    expect(test).toHaveTextContent('light');
  });
});
