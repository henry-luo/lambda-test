

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - return value of callbackfn is a RegExp
    object
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return new RegExp();
}

assert([11].every(callbackfn), '[11].every(callbackfn) !== true');
assert(accessed, 'accessed !== true');
