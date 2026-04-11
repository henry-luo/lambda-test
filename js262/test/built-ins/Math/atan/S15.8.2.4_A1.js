

/*---
info: If x is NaN, Math.atan(x) is NaN
es5id: 15.8.2.4_A1
description: Checking if Math.atan(NaN) is NaN
---*/

assert.sameValue(Math.atan(NaN), NaN);
