

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - return value of callbackfn is a number
    (value is NaN)
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return NaN;
}

assert.sameValue([11].every(callbackfn), false, '[11].every(callbackfn)');
assert(accessed, 'accessed !== true');
