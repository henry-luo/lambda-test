

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - value of 'length' is a number (value is
    -Infinity)
---*/

var accessed = false;

function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
}

var obj = {
  0: 9,
  length: -Infinity
};

assert.sameValue(Array.prototype.reduce.call(obj, callbackfn, 1), 1, 'Array.prototype.reduce.call(obj, callbackfn, 1)');
assert.sameValue(accessed, false, 'accessed');
