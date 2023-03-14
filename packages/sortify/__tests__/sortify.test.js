'use strict';

const { bubble } = require('../dist/sortify.js');

test('bubble sort', () => {
  expect(bubble?.sort([5, 2, 6, 4])).toBe([2, 4, 5, 6]);
});
