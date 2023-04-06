'use strict';

const structify = require('../dist/structify');

describe('Queue data structure', () => {
  test('If initial queue is empty. isEmpty should be true', () => {
    const queue1 = new structify.default.Queue();
    expect(queue1.isEmpty()).toStrictEqual(true);
  });

  test('Get Queue Buffer', () => {
    const queue1 = new structify.default.Queue();
    expect(queue1.getBuffer()).toStrictEqual([]);
  });

  test('Enqueue the queue', () => {
    const queue1 = new structify.default.Queue();
    expect(queue1.enqueue('Testing the queue')).toStrictEqual(1);
  });
});
