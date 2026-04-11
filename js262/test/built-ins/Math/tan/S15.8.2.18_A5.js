

/*---
info: If x is -Infinity, Math.tan(x) is NaN
es5id: 15.8.2.18_A5
description: Checking if Math.tan(-Infinity) is NaN
---*/

assert.sameValue(Math.tan(-Infinity), NaN);
