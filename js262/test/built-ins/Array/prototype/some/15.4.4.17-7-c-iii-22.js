

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - return value of callbackfn is a RegExp
    object
---*/

function callbackfn(val, idx, obj) {
  return new RegExp();
}

assert([11].some(callbackfn), '[11].some(callbackfn) !== true');
