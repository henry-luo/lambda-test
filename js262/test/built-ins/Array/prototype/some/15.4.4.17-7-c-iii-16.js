

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - return value of callbackfn is an Array
    object
---*/

function callbackfn(val, idx, obj) {
  return new Array(10);
}

assert([11].some(callbackfn), '[11].some(callbackfn) !== true');
