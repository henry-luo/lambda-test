

/*---
info: If x is +Infinity, Math.exp(x) is +Ifinity
es5id: 15.8.2.8_A4
description: Checking if Math.exp(+Infinity) is +Ifinity
---*/


var x = +Infinity;
assert.sameValue(Math.exp(x), +Infinity, 'Math.exp(+Infinity) must return +Infinity');
