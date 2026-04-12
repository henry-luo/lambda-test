

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - return value of callbackfn is an Array
    object
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return [];
}

assert([11].every(callbackfn), '[11].every(callbackfn) !== true');
assert(accessed, 'accessed !== true');
