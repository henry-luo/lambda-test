

/*---
esid: sec-array.prototype.every
description: Array.prototype.every - return value of callbackfn is a Date object
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return new Date(0);
}

assert([11].every(callbackfn), '[11].every(callbackfn) !== true');
assert(accessed, 'accessed !== true');
