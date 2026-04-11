

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - built-in functions can be used as thisArg
---*/

function callbackfn(val, idx, obj) {
  return this === eval;
}

assert([11].some(callbackfn, eval), '[11].some(callbackfn, eval) !== true');
