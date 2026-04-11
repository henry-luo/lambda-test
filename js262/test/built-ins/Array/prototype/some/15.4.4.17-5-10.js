

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - Array Object can be used as thisArg
---*/

var objArray = [];

function callbackfn(val, idx, obj) {
  return this === objArray;
}

assert([11].some(callbackfn, objArray), '[11].some(callbackfn, objArray) !== true');
