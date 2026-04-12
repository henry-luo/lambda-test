

/*---
info: String.prototype.split has not prototype property
es5id: 15.5.4.14_A6
description: Checking String.prototype.split.prototype
---*/

assert.sameValue(
  String.prototype.split.prototype,
  undefined,
  'The value of String.prototype.split.prototype is expected to equal `undefined`'
);
