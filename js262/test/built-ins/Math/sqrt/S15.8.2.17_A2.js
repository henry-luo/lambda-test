

/*---
info: If x less than 0, Math.sqrt(x) is NaN
es5id: 15.8.2.17_A2
description: Checking if Math.sqrt(x) is NaN, where x is less than 0
---*/

assert.sameValue(Math.sqrt(-0.000000000000001), NaN, "-0.000000000000001");
assert.sameValue(Math.sqrt(-1), NaN, "-1");
assert.sameValue(Math.sqrt(-Infinity), NaN, "-Infinity");
