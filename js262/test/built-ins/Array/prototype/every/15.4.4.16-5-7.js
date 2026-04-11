

/*---
esid: sec-array.prototype.every
description: Array.prototype.every - built-in functions can be used as thisArg
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return this === eval;
}

assert([11].every(callbackfn, eval), '[11].every(callbackfn, eval) !== true');
assert(accessed, 'accessed !== true');
