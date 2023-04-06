'use strict';
import bubble from './bubbleSort/index';
import selectionSort from './selectionSort';
import insertionSort from './insertionSort';
import mergeSort from './mergeSort';

export default {
  bubble,
  selection: selectionSort,
  insertion: insertionSort,
  merge: mergeSort,
};
