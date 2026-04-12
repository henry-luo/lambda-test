

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - return value of callbackfn is a Number
    object
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return new Number();
}

assert([11].every(callbackfn), '[11].every(callbackfn) !== true');
assert(accessed, 'accessed !== true');
