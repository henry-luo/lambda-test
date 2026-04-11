

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf return -1 when value of 'length' is a
    boolean (value is true)
---*/

var obj = {
  0: 0,
  1: 1,
  length: true
};

assert.sameValue(Array.prototype.lastIndexOf.call(obj, 0), 0, 'Array.prototype.lastIndexOf.call(obj, 0)');
assert.sameValue(Array.prototype.lastIndexOf.call(obj, 1), -1, 'Array.prototype.lastIndexOf.call(obj, 1)');
