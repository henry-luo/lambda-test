

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - callbackfn is called with 0 formal parameter
---*/

function callbackfn() {
  return true;
}

assert([11, 12].some(callbackfn), '[11, 12].some(callbackfn) !== true');
