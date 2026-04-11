

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - return value of callbackfn is the JSON
    object
---*/

function callbackfn(val, idx, obj) {
  return JSON;
}

assert([11].some(callbackfn), '[11].some(callbackfn) !== true');
