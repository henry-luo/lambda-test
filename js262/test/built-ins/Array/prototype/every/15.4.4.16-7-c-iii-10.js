

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - return value of callbackfn is a number
    (value is Infinity)
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return Infinity;
}

assert([11].every(callbackfn), '[11].every(callbackfn) !== true');
assert(accessed, 'accessed !== true');
