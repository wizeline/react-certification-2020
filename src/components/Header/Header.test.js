import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header.component';

describe('Header component', () => {
  it('it contains four components', () => {
    const element = renderer
      .create(
          <Header />
      )
      .toJSON();

    expect(element.children.length).toBe(4);
  });
});