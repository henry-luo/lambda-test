

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - Error object can be used as thisArg
---*/

var objError = new RangeError();

function callbackfn(val, idx, obj) {
  return this === objError;
}

assert([11].some(callbackfn, objError), '[11].some(callbackfn, objError) !== true');
