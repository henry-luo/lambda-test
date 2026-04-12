

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - element to be retrieved is own data
    property on an Array-like object
---*/

var obj = {
  0: 0,
  1: 1,
  2: 2,
  length: 3
};

assert.sameValue(Array.prototype.indexOf.call(obj, 0), 0, 'Array.prototype.indexOf.call(obj, 0)');
assert.sameValue(Array.prototype.indexOf.call(obj, 1), 1, 'Array.prototype.indexOf.call(obj, 1)');
assert.sameValue(Array.prototype.indexOf.call(obj, 2), 2, 'Array.prototype.indexOf.call(obj, 2)');
