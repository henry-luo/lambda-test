

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - value of 'length' is a number (value is
    positive)
---*/

var obj = {
  3: true,
  4: false,
  length: 4
};

assert.sameValue(Array.prototype.indexOf.call(obj, true), 3, 'Array.prototype.indexOf.call(obj, true)');
assert.sameValue(Array.prototype.indexOf.call(obj, false), -1, 'Array.prototype.indexOf.call(obj, false)');
