

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter - 'length' is a string containing a
    positive number
---*/

function callbackfn(val, idx, obj) {
  return true;
}

var obj = {
  1: 11,
  2: 9,
  length: "2"
};

var newArr = Array.prototype.filter.call(obj, callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], 11, 'newArr[0]');
