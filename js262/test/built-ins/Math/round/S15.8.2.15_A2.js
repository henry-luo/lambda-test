

/*---
info: If x is +0, Math.round(x) is +0
es5id: 15.8.2.15_A2
description: Checking if Math.round(x) equals to +0, where x is +0
---*/

assert.sameValue(Math.round(0), 0);
