

/*---
esid: sec-array.prototype.map
description: Array.prototype.map - value of 'length' is a negative non-integer
---*/

function callbackfn(val, idx, obj) {
  return val < 10;
}

var obj = {
  0: 11,
  1: 9,
  length: -4294967294.5
};

var newArr = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(newArr.length, 0, 'newArr.length');
