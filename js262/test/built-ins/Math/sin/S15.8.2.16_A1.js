

/*---
info: If x is NaN, Math.sin(x) is NaN
es5id: 15.8.2.16_A1
description: Checking if Math.sin(NaN) is NaN
---*/

assert.sameValue(Math.sin(NaN), NaN);
