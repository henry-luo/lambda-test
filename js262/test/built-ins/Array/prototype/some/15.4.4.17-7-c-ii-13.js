

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - callbackfn that uses arguments object to
    get parameter value
---*/

function callbackfn() {
  return arguments[2][arguments[1]] === arguments[0];
}

assert([9, 12].some(callbackfn), '[9, 12].some(callbackfn) !== true');
