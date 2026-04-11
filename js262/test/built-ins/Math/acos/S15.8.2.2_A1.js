

/*---
info: If x is NaN, Math.acos(x) is NaN
es5id: 15.8.2.2_A1
description: Checking if Math.acos(NaN) is NaN
---*/

assert.sameValue(Math.acos(NaN), NaN);
