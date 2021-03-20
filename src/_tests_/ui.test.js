import React from 'react';
import renderer from 'react-test-renderer';
import {Title, Vid , Container} from './components/Body.js';

test('title is correct', () => {
  it('test font size', () => {
    const wrapper = render(<Title />);
    expect(wrapper.find('h1')).toHaveStyleRule('font-family', 'sans-serif');
  });
  
});