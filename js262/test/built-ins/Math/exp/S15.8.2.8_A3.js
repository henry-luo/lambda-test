

/*---
info: If x is -0, Math.exp(x) is 1
es5id: 15.8.2.8_A3
description: Checking if Math.exp(-0) is 1
---*/


var x = -0;
assert.sameValue(Math.exp(x), 1, 'Math.exp(-0) must return 1');
