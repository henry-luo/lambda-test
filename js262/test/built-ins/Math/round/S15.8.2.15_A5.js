

/*---
info: If x is -Infinity, Math.round(x) is -Infinity
es5id: 15.8.2.15_A5
description: Checking if Math.round(x) is -Infinity, where x is -Infinity
---*/


var x = -Infinity;
assert.sameValue(Math.round(x), -Infinity, 'Math.round(-Infinity) must return -Infinity');
