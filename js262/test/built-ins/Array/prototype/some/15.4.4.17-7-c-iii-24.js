

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - return value of callbackfn is an Error
    object
---*/

function callbackfn(val, idx, obj) {
  return new EvalError();
}

assert([11].some(callbackfn), '[11].some(callbackfn) !== true');
