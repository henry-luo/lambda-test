

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - boolean primitive can be used as thisArg
---*/

function callbackfn(val, idx, obj) {
  return this.valueOf() === false;
}

assert([11].some(callbackfn, false), '[11].some(callbackfn, false) !== true');
