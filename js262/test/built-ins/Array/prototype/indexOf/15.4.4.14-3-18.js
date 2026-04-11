

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - value of 'length' is a string that can't
    convert to a number
---*/

var obj = {
  0: true,
  100: true,
  length: "one"
};

assert.sameValue(Array.prototype.indexOf.call(obj, true), -1, 'Array.prototype.indexOf.call(obj, true)');
