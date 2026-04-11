

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - when 'length' is a string containing a
    number with leading zeros
---*/

function callbackfn(val, idx, obj) {
  return val < 10;
}

var obj = {
  0: 11,
  1: 9,
  2: 12,
  length: "0002.00"
};

var newArr = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(newArr.length, 2, 'newArr.length');
