

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - return value (new Boolean(false)) of
    callbackfn is treated as true value
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return new Boolean(false);
}

assert([11].every(callbackfn), '[11].every(callbackfn) !== true');
assert(accessed, 'accessed !== true');
