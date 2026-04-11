

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - return value of callbackfn is the Arguments
    object
---*/

function callbackfn(val, idx, obj) {
  return arguments;
}

assert([11].some(callbackfn), '[11].some(callbackfn) !== true');
