

/*---
info: If x is -0, Math.ceil(x) is -0
es5id: 15.8.2.6_A3
description: Checking if Math.ceil(x) is -0, where x is -0
---*/

assert.sameValue(Math.ceil(-0), -0);
