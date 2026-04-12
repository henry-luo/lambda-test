

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - return value of callbackfn is a number
    (value is positive number)
---*/

function callbackfn(val, idx, obj) {
  return 5;
}

assert([11].some(callbackfn), '[11].some(callbackfn) !== true');
