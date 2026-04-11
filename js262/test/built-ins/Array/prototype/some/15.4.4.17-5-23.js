

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - number primitive can be used as thisArg
---*/

function callbackfn(val, idx, obj) {
  return this.valueOf() === 101;
}

assert([11].some(callbackfn, 101), '[11].some(callbackfn, 101) !== true');
