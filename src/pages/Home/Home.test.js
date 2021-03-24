import React from 'react';
import renderer from 'react-test-renderer';
import Home from './index';

test('Home renders without any error', () => {
  const component = renderer.create(<Home />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
