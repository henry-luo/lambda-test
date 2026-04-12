

/*---
info: If x is NaN, Math.floor(x) is NaN
es5id: 15.8.2.9_A1
description: Checking if Math.floor(NaN) is NaN
---*/

assert.sameValue(Math.floor(NaN), NaN);
