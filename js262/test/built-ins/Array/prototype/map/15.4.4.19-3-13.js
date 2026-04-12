

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - value of 'length' is string that is able to
    convert to number primitive (value is a decimal number)
---*/

function callbackfn(val, idx, obj) {
  return val < 10;
}

var obj = {
  0: 11,
  1: 9,
  2: 12,
  length: "2.5"
};

var newArr = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(newArr.length, 2, 'newArr.length');
