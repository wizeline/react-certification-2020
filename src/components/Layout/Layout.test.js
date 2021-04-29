import React from 'react';
import renderer from 'react-test-renderer';
import Layout from './Layout.component';

describe('Layout component', () => {
  it('is contained in a main tag', () => {
    const testRenderer = renderer.create(
      <Layout />
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType('main').type).toBe('main');
  });

});
