

/*---
info: If x is NaN, Math.tan(x) is NaN
es5id: 15.8.2.18_A1
description: Checking if Math.tan(NaN) is NaN
---*/

assert.sameValue(Math.tan(NaN), NaN);
