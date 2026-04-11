

/*---
es6id: 20.1.2.3
author: Ryan Lewis
description: Number.isInteger should return false if called with a double.
---*/

assert.sameValue(Number.isInteger(6.75), false, '6.75');
assert.sameValue(Number.isInteger(0.000001), false, '0.000001');
assert.sameValue(Number.isInteger(-0.000001), false, '-0.000001');
assert.sameValue(Number.isInteger(11e-1), false, '11e-1');
