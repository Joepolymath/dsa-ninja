'use strict';

const sort = require('../dist/sortify');

test('bubble sort', () => {
  expect(sort.default.bubble.sort([5, 2, 6, 4])).toStrictEqual([2, 4, 5, 6]);
});
