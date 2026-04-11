

/*---
info: If x is -0, Math.cos(x) is 1
es5id: 15.8.2.7_A3
description: Checking if Math.cos(-0) is 1
---*/


var x = -0;
assert.sameValue(Math.cos(x), 1, 'Math.cos(-0) must return 1');
