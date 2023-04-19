// Set

// Note: beforeAll, beforeEach, afterAll, afterEach are test hooks

describe('group 1', () => {
  // it's execute before testing
  beforeAll(() => {
    console.log('group 1 beforeAll');

    // Example: Up database
  });

  // it's execute after testing
  afterAll(() => {
    console.log('afterAll');

    // Example: Down database
  });

  // it's execute before each test
  beforeEach(() => {
    console.log('beforeEach');
  });

  // it's execute after each test
  afterEach(() => {
    console.log('afterEach');
  });

  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

  describe('group 2', () => {
    beforeAll(() => {
      console.log('group 2 beforeAll');
    });

    test('case 3', () => {
      console.log('case 3');
      expect(1 + 1).toBe(2);
    });

    test('case 4', () => {
      console.log('case 4');
      expect(1 + 3).toBe(4);
    });
  });
});
