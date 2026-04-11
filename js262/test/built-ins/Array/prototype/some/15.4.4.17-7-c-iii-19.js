

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - return value of callbackfn is a Number
    object
---*/

function callbackfn(val, idx, obj) {
  return new Number();
}

assert([11].some(callbackfn), '[11].some(callbackfn) !== true');
