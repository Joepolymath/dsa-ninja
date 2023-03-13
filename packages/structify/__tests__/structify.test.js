'use strict';

const structify = require('..');
const assert = require('assert').strict;

assert.strictEqual(structify(), 'Hello from structify');
console.info('structify tests passed');
