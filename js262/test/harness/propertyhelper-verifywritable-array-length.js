

/*---
description: >
  "length" property of Arrays is tested with valid value.
includes: [propertyHelper.js]
---*/

var array = [1, 2, 3];

verifyWritable(array, "length");

assert.sameValue(array.length, 3, '`verifyWritable` should be non-destructive.');
