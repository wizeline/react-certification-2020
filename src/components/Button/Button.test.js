import React from 'react';
import Button from './Button.component';
import renderer from 'react-test-renderer';

describe('Button component', () => {
  it('renders an img tag', () => {
    const testRenderer = renderer.create(
        <Button />
    );
    const testInstance = testRenderer.root;

    expect(testInstance.findByType('img')._fiber.elementType).toBe('img');
  });

  it('Image has an alt attribute as user Avatar', () => {
    const element = renderer.create(
          <Button />
    );
    const testInstance = element.root;
    expect(testInstance.findByType('img')._fiber.memoizedProps.alt).toBeTruthy();
    expect(testInstance.findByType('img')._fiber.memoizedProps.alt).toBe('User Avatar');
  });
});