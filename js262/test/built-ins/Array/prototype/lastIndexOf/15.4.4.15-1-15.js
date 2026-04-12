

/*---
esid: sec-array.prototype.lastindexof
description: Array.prototype.lastIndexOf applied to the Arguments object
---*/

var obj = (function fun() {
  return arguments;
}(1, 2, 3));

assert.sameValue(Array.prototype.lastIndexOf.call(obj, 2), 1, 'Array.prototype.lastIndexOf.call(obj, 2)');
