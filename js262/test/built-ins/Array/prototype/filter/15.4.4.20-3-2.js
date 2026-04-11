

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter applied on an Array-like object if 'length'
    is 1 (length overridden to true(type conversion))
---*/

function callbackfn(val, idx, obj) {
  return true;
}

var obj = {
  0: 11,
  1: 9,
  length: true
};
var newArr = Array.prototype.filter.call(obj, callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], 11, 'newArr[0]');
