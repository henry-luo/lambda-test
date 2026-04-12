

/*---
info: If x is +Infinity, Math.cos(x) is NaN
es5id: 15.8.2.7_A4
description: Checking if Math.cos(+Infinity) is NaN
---*/

assert.sameValue(Math.cos(Infinity), NaN);
