

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - value of 'length' is a number (value is
    -Infinity)
---*/

function callbackfn(val, idx, obj) {
  return val < 10;
}

var obj = {
  0: 9,
  length: -Infinity
};

var newArr = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(newArr.length, 0, 'newArr.length');
