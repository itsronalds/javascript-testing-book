const {
  sum, multiply, divide, average,
} = require('./02-math');

test('adds 1 + 3 should be 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('multiplication should be 4', () => {
  const rta = multiply(2, 2);
  expect(rta).toBe(4);
});

test('divisions', () => {
  const rta = divide(6, 3);
  expect(rta).toBe(2);

  const rta2 = divide(9, 3);
  expect(rta2).toBe(3);
});

test('should divide for zero', () => {
  const rta = divide(6, 0);
  expect(rta).toBeNull();

  const rta2 = divide(10, 0);
  expect(rta2).toBeNull();
});

test('should be array of notes (numbers) between 0 and 10', () => {
  const rta = average(5, 10, 5);
  expect(rta).toBe(6.6);

  const rta2 = average(10, 9, 5);
  expect(rta2).toBe(8);

  // Test with throw new Error('a message...')
  expect(() => {
    average([10, 5, 10]);
  }).toThrow('Values must be a number.');
});
