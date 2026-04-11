

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter - value of 'length' is a string that can't
    convert to a number
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return true;
}

var obj = {
  0: 9,
  length: "asdf!_"
};

var newArr = Array.prototype.filter.call(obj, callbackfn);

assert.sameValue(accessed, false, 'accessed');
assert.sameValue(newArr.length, 0, 'newArr.length');
