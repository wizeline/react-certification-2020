const sum = require('./routine');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 2)).toEqual(4);
  expect(sum(2, 5)).toEqual(7);
});