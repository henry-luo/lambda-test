

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - 'length' is a string containing a negative
    number
---*/

function callbackfn(val, idx, obj) {
  return val < 10;
}

var obj = {
  0: 11,
  1: 9,
  2: 12,
  length: "-4294967294"
};

var newArr = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(newArr.length, 0, 'newArr.length');
