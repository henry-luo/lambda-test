

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - return value of callbackfn is a Date object
---*/

function callbackfn(val, idx, obj) {
  return new Date(0);
}

assert([11].some(callbackfn), '[11].some(callbackfn) !== true');
