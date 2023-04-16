// Also called matchers

test('proof an object', () => {
  const data = { name: 'Ronald' };
  data.lastname = 'Abu Saleh';

  expect(data).toEqual({ name: 'Ronald', lastname: 'Abu Saleh' });
});

test('object should be defined and null', () => {
  const data = null;

  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined(); // With negation
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(false).toBeFalsy();
  expect('').toBeFalsy();
  expect(0).toBeFalsy();
  expect(undefined).toBeFalsy();
  expect(null).toBeFalsy();

  expect(true).toBeTruthy();
  expect('a string').toBeTruthy();
  expect(10).toBeTruthy();
});

test('strings', () => {
  const fullname = 'Ronald Abu Saleh';

  expect(fullname).toMatch(/ald/);
});

test('list / array', () => {
  const numbers = [1, 2, 3, 4, 5];

  expect(numbers).toContain(5);
});
