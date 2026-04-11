

/*---
info: Check ToLength(length) for non Array objects
esid: sec-array.prototype.slice
description: length = 4294967297
---*/

assert.throws(RangeError, () => {
  var obj = {};
  obj.slice = Array.prototype.slice;
  obj[0] = "x";
  obj[4294967296] = "y";
  obj.length = 4294967297;
  obj.slice(0, 4294967297);
});
