import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '.';
// JSON
import mokup from '../../../json/youtube-mokup';

describe('Card component', () => {
  const { items } = mokup;
  beforeEach(() => {
    render(
      <Card
        image={items[0].snippet.thumbnails.high.url}
        title={items[0].snippet.title}
        description={items[0].snippet.description}
      />
    );
  });
  test('review that it renders correctly and review the inner children', () => {
    const card = screen.getByTestId('card-test');
    expect(card.children.length).toEqual(2);
  });
  test('handle click', () => {
    const card = screen.getByTestId('card-test');
    userEvent.click(card, { button: 0 });
  });
});
