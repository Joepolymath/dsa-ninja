'use strict';

const sort = require('../dist/sortify.js');

test('bubble sort', () => {
  expect(sort([5, 2, 6, 4])).toBe([2, 4, 5, 6]);
});
