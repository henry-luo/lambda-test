

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - value of 'length' is a number (value is
    Infinity)
---*/

function callbackfn(val, idx, obj) {
  return val < 10;
}

var obj = {
  0: 9,
  length: Infinity
};
assert.throws(RangeError, function() {
  Array.prototype.map.call(obj, callbackfn);
});
