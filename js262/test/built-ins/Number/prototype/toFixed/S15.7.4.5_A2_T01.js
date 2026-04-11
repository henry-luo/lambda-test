

/*---
info: The length property of the toFixed method is 1
es5id: 15.7.4.5_A2_T01
description: Checking Number prototype itself
---*/
assert.sameValue(
  Number.prototype.toFixed.hasOwnProperty("length"),
  true,
  'Number.prototype.toFixed.hasOwnProperty("length") must return true'
);

assert.sameValue(
  Number.prototype.toFixed.length,
  1,
  'The value of Number.prototype.toFixed.length is expected to be 1'
);
