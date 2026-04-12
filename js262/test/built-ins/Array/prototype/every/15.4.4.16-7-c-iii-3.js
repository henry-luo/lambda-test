

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - return value of callbackfn is a boolean
    (value is false)
---*/

var accessed = false;
var obj = {
  0: 11,
  length: 1
};

function callbackfn(val, idx, obj) {
  accessed = true;
  return false;
}

assert.sameValue(Array.prototype.every.call(obj, callbackfn), false, 'Array.prototype.every.call(obj, callbackfn)');
assert(accessed, 'accessed !== true');
