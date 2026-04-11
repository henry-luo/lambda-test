

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf - 'length' is undefined property
---*/

var obj = {
  0: true,
  1: true
};

assert.sameValue(Array.prototype.indexOf.call(obj, true), -1, 'Array.prototype.indexOf.call(obj, true)');
