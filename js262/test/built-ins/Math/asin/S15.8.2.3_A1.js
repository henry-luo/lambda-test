

/*---
info: If x is NaN, Math.asin(x) is NaN
es5id: 15.8.2.3_A1
description: Checking if Math.asin(NaN) is NaN
---*/

assert.sameValue(Math.asin(NaN), NaN, "NaN");
