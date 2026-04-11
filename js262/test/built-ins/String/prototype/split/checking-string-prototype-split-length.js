

/*---
info: The length property of the split method is 2
es5id: 15.5.4.14_A11
description: Checking String.prototype.split.length
---*/

assert(
  String.prototype.split.hasOwnProperty("length"),
  'String.prototype.split.hasOwnProperty("length") must return true'
);

assert.sameValue(String.prototype.split.length, 2, 'The value of String.prototype.split.length is 2');
