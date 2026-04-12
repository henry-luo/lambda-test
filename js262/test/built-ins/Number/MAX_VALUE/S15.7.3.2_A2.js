

/*---
info: Number.MAX_VALUE is ReadOnly
es5id: 15.7.3.2_A2
description: Checking if varying Number.MAX_VALUE fails
includes: [propertyHelper.js]
---*/


var x = Number.MAX_VALUE;
verifyNotWritable(Number, "MAX_VALUE", null, 1);
assert.sameValue(Number.MAX_VALUE, x, 'The value of Number.MAX_VALUE is expected to equal the value of x');

