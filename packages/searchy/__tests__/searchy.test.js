'use strict';
const search = require('../dist/searchy');

test('should find the given element', () => {
  const element = 5;
  const array = [1, 2, 3, 4, 5];
  expect(search.default.binary.search(array, element)).toStrictEqual(4);
});
