

/*---
es6id: 20.1.2.3
author: Ryan Lewis
description: Number.isInteger should return false if called with NaN.
---*/

assert.sameValue(Number.isInteger(NaN), false, 'Number.isInteger(NaN)');
