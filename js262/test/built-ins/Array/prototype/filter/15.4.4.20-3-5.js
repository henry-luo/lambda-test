

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter - value of 'length' is a number (value is
    -0)
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return true;
}

var obj = {
  0: 11,
  length: -0
};
var newArr = Array.prototype.filter.call(obj, callbackfn);

assert.sameValue(newArr.length, 0, 'newArr.length');
assert.sameValue(accessed, false, 'accessed');
