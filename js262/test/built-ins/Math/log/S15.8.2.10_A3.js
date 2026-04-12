

/*---
info: If x is +0 or -0, Math.log(x) is -Infinity
es5id: 15.8.2.10_A3
description: Checking if Math.log(+0) and Math.log(-0) equals to -Infinity
---*/


var x = +0;
assert.sameValue(Math.log(x), -Infinity, 'Math.log(+0) must return -Infinity');


var x = -0;
assert.sameValue(Math.log(x), -Infinity, 'Math.log(-0) must return -Infinity');
