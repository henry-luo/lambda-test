

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - 'length' is a string containing an
    exponential number
---*/

function callbackfn(val, idx, obj) {
  return val < 10;
}

var obj = {
  0: 11,
  1: 9,
  2: 12,
  length: "2E0"
};

var newArr = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(newArr.length, 2, 'newArr.length');
