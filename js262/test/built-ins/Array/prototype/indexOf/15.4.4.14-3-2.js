

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf return -1 when 'length' is a boolean
    (value is true)
---*/

var obj = {
  0: 0,
  1: 1,
  length: true
};

assert.sameValue(Array.prototype.indexOf.call(obj, 0), 0, 'Array.prototype.indexOf.call(obj, 0)');
assert.sameValue(Array.prototype.indexOf.call(obj, 1), -1, 'Array.prototype.indexOf.call(obj, 1)');
