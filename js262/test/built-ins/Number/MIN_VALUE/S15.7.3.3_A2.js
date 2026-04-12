

/*---
info: Number.MIN_VALUE is ReadOnly
es5id: 15.7.3.3_A2
description: Checking if varying Number.MIN_VALUE fails
includes: [propertyHelper.js]
---*/


var x = Number.MIN_VALUE;
verifyNotWritable(Number, "MIN_VALUE", null, 1);
assert.sameValue(Number.MIN_VALUE, x, 'The value of Number.MIN_VALUE is expected to equal the value of x');

