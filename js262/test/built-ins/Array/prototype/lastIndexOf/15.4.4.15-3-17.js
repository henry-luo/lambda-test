

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - value of 'length' is a string
    containing a number with leading zeros
---*/

var obj = {
  1: 1,
  2: 2,
  length: "0002.0"
};

assert.sameValue(Array.prototype.lastIndexOf.call(obj, 1), 1, 'Array.prototype.lastIndexOf.call(obj, 1)');
assert.sameValue(Array.prototype.lastIndexOf.call(obj, 2), -1, 'Array.prototype.lastIndexOf.call(obj, 2)');
