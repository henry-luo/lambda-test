

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - return value of callbackfn is a Boolean
    object
---*/

function callbackfn(val, idx, obj) {
  return new Boolean();
}

assert([11].some(callbackfn), '[11].some(callbackfn) !== true');
