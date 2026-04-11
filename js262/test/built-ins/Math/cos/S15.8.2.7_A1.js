

/*---
info: If x is NaN, Math.cos(x) is NaN
es5id: 15.8.2.7_A1
description: Checking if Math.cos(NaN) is NaN
---*/

assert.sameValue(Math.cos(NaN), NaN);
