

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf - value of 'length' is undefined
---*/

var obj = {
  0: 1,
  1: 1,
  length: undefined
};

assert.sameValue(Array.prototype.indexOf.call(obj, 1), -1, 'Array.prototype.indexOf.call(obj, 1)');
