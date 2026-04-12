

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce applied to the Array-like object that
    'length' property doesn't exist
---*/

var accessed = false;

function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
}

var obj = {
  0: 11,
  1: 12
};

assert.sameValue(Array.prototype.reduce.call(obj, callbackfn, 1), 1, 'Array.prototype.reduce.call(obj, callbackfn, 1)');
assert.sameValue(accessed, false, 'accessed');
