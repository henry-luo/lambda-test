

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map on an Array-like object if 'length' is 1
    (length overridden to true(type conversion))
---*/

function callbackfn(val, idx, obj) {
  return val > 10;
}

var obj = {
  0: 11,
  length: true
};

var newArr = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
