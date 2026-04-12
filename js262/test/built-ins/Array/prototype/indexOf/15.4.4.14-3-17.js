

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - 'length' is a string containing a number
    with leading zeros
---*/

var obj = {
  1: true,
  2: "0002.0",
  length: "0002.0"
};

assert.sameValue(Array.prototype.indexOf.call(obj, true), 1, 'Array.prototype.indexOf.call(obj, true)');
assert.sameValue(Array.prototype.indexOf.call(obj, "0002.0"), -1, 'Array.prototype.indexOf.call(obj, "0002.0")');
