

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - return value of callbackfn is a Function
    object
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return function() {};
}

assert([11].every(callbackfn), '[11].every(callbackfn) !== true');
assert(accessed, 'accessed !== true');
