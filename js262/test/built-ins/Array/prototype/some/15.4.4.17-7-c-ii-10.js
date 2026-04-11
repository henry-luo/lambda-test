

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - callbackfn is called with 1 formal parameter
---*/

function callbackfn(val) {
  return val > 10;
}

assert([11, 12].some(callbackfn), '[11, 12].some(callbackfn) !== true');
