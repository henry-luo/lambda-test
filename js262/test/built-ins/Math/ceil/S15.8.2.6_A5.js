

/*---
info: If x is -Infinity, Math.ceil(x) is -Infinity
es5id: 15.8.2.6_A5
description: Checking if Math.ceil(x) is -Infinity, where x is -Infinity
---*/


var x = -Infinity;
assert.sameValue(Math.ceil(x), -Infinity, 'Math.ceil(-Infinity) must return -Infinity');
