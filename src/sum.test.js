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
test('triples 0 to equal 0', () => {
  expect(sums.triple(0)).toBe(0);
});
test('triples 5 to equal 15', () => {
  expect(sums.triple(5)).toBe(15);
});
test('5 is bigger than 1',() => {
  expect(sums.Biggest(5,1)).toBe(5);
})
test('5 is smaller than 10',() => {
  expect(sums.Biggest(5,10)).toBe(10);
})
