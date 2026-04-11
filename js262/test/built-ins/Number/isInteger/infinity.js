

/*---
es6id: 20.1.2.3
author: Ryan Lewis
description: Number.isInteger should return false if called with Infinity.
---*/

assert.sameValue(Number.isInteger(Infinity), false, 'Infinity');
assert.sameValue(Number.isInteger(-Infinity), false, '-Infinity');
