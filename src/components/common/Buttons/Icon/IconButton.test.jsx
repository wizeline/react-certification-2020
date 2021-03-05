import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import IconButton from './IconButton';
import { ReactComponent as IconProfile } from '../../../../assets/account.svg';

describe('Icon Button Component', () => {
  it('renders successfully with required props', () => {
    const { getByTestId } = render(
      <IconButton image="new-image" handleClick={() => {}} className="bigger">
        <IconProfile />
      </IconButton>
    );
    getByTestId('icon-button');
  });
  it('simulates icon click', () => {
    const { getByTestId } = render(
      <IconButton image="new-image" handleClick={() => {}} />
    );
    const button = getByTestId('icon-button');
    userEvent.click(button, { button: 0 });
  });
});
