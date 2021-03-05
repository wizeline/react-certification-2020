import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AuthProvider, { useAuth } from './Auth.provider';

describe('AuthProvider', () => {
  beforeEach(() => {
    const TestComponent = () => {
      const { authenticated, login, logout } = useAuth();
      const handleAuthentication = () => {
        if (authenticated) logout();
        else login();
      };
      return (
        <button data-testid="test-auth" type="button" onClick={handleAuthentication}>
          {authenticated ? 'has login' : 'has not login'}
        </button>
      );
    };
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );
  });
  it('Returns first authentication', async () => {
    const auth = screen.getByTestId('test-auth');
    expect(auth).toHaveTextContent('has not login');
  });
  it('Returns login action', async () => {
    const auth = screen.getByTestId('test-auth');
    await userEvent.click(auth, { button: 0 });
    expect(auth).toHaveTextContent('has login');
  });
  it('Returns logout action', async () => {
    const auth = screen.getByTestId('test-auth');
    await userEvent.click(auth, { button: 0 });
    expect(auth).toHaveTextContent('has not login');
  });
});
