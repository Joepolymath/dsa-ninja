'use strict';

const sort = require('../dist/sortify');

test('bubble sort', () => {
  expect(sort.default.bubble.sort([5, 2, 6, 4])).toStrictEqual([2, 4, 5, 6]);
});

test('selection sort', () => {
  expect(sort.default.selection.sort([5, 2, 6, 4])).toStrictEqual([2, 4, 5, 6]);
});

test('insertion sort', () => {
  expect(sort.default.insertion.sort([5, 2, 6, 4])).toStrictEqual([2, 4, 5, 6]);
});

test('merge sort', () => {
  expect(sort.default.merge.sort([5, 2, 6, 4])).toStrictEqual([2, 4, 5, 6]);
});
