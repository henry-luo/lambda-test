

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - value of 'length' is a number (value
    is -Infinity)
---*/

var obj = {
  0: 0,
  length: -Infinity
};

assert.sameValue(Array.prototype.lastIndexOf.call(obj, 0), -1, 'Array.prototype.lastIndexOf.call(obj, 0)');
