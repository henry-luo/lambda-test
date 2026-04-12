

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - return value (new Boolean(false)) of
    callbackfn is treated as true value
---*/

function callbackfn() {
  return new Boolean(false);
}

assert([11].some(callbackfn), '[11].some(callbackfn) !== true');
