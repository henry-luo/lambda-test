

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - return value of callbackfn is Function
    object
---*/

function callbackfn(val, idx, obj) {
  return function() {};
}

assert([11].some(callbackfn), '[11].some(callbackfn) !== true');
