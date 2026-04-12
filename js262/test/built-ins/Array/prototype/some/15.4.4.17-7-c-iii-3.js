

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - return value of callbackfn is a boolean
    (value is false)
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return false;
}

var obj = {
  0: 11,
  length: 2
};

assert.sameValue(Array.prototype.some.call(obj, callbackfn), false, 'Array.prototype.some.call(obj, callbackfn)');
assert(accessed, 'accessed !== true');
