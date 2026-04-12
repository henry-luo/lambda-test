

/*---
info: If x is -0, Math.atan(x) is -0
es5id: 15.8.2.4_A3
description: Checking if Math.atan(-0) equals to -0
---*/

assert.sameValue(Math.atan(-0), -0);
