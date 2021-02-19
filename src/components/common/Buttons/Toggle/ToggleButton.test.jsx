import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToggleButton from './ToggleButton';
import { ReactComponent as ToggleProfile } from '../../../../assets/account.svg';

describe('Toggle Button Component', () => {
  it('renders successfully with required props', () => {
    render(
      <ToggleButton title="Dark mode" handleClick={() => {}} checked={false}>
        <ToggleProfile />
      </ToggleButton>
    );
    const label = screen.getByTestId('toggle-button');
    expect(label.innerHTML.includes('Dark mode')).toBeTruthy();
  });
  it('simulates toggle click', () => {
    const { getByTestId } = render(
      <ToggleButton title="Dark mode" handleClick={() => {}} checked />
    );
    const button = getByTestId('toggle-button');
    userEvent.click(button, { button: 0 });
  });
});
