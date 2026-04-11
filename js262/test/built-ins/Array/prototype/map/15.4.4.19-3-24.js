

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - value of 'length' is a positive non-integer,
    ensure truncation occurs in the proper direction
---*/

function callbackfn(val, idx, obj) {
  return val < 10;
}

var obj = {
  0: 11,
  1: 9,
  length: 2.685
};

var newArr = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(newArr.length, 2, 'newArr.length');
