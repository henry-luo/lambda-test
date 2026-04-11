

/*---
info: If x is NaN, Math.sqrt(x) is NaN
es5id: 15.8.2.17_A1
description: Checking if Math.sqrt(NaN) is NaN
---*/

assert.sameValue(Math.sqrt(NaN), NaN);
