import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputText from './InputText';

describe('Input Text', () => {
  it('renders input component', () => {
    render(<InputText />);
    const input = screen.getByRole('textbox');
    expect(input.getAttribute('type')).toBe('text');
  });
  it('writes on the input', async () => {
    render(<InputText placeholder="Search..." />);
    const input = screen.getByPlaceholderText('Search...');
    await userEvent.type(input, 'Wizeline');
    expect(input.value).toBe('Wizeline');
  });
});
