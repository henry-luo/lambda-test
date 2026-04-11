

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - value of 'length' is boundary value (2^32 +
    1)
---*/

function callbackfn(val, idx, obj) {
  return val > 10;
}

var obj = {
  0: 11,
  1: 9,
  length: 4294967297
};
assert.throws(RangeError, function() {
  var newArr = Array.prototype.map.call(obj, callbackfn);
});
