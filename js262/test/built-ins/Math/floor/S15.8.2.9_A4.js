

/*---
info: If x is +Infinity, Math.floor(x) is +Infinity
es5id: 15.8.2.9_A4
description: Checking if Math.floor(x) is +Infinity, where x is +Infinity
---*/


var x = +Infinity;
assert.sameValue(Math.floor(x), +Infinity, 'Math.floor(+Infinity) must return +Infinity');
