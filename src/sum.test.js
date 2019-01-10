const sums = require('./sum');
const double = require

test('adds 1 + 2 to equal 3', () => {
  expect(sums.sum(1,2)).toBe(3);
});
test('doubles 1 to equal 2', () => {
  expect(sums.double(1)).toBe(2);
});
test('doubles 0 to equal 0', () => {
  expect(sums.double(0)).toBe(0);
});
