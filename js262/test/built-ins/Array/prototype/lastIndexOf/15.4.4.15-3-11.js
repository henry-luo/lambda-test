

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - value of 'length' is a string
    containing positive number
---*/

var obj = {
  1: true,
  2: false,
  length: "2"
};

assert.sameValue(Array.prototype.lastIndexOf.call(obj, true), 1, 'Array.prototype.lastIndexOf.call(obj, true)');
assert.sameValue(Array.prototype.lastIndexOf.call(obj, false), -1, 'Array.prototype.lastIndexOf.call(obj, false)');
