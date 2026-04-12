

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - Function Object can be used as thisArg
---*/

var objFunction = function() {};

function callbackfn(val, idx, obj) {
  return this === objFunction;
}

assert([11].some(callbackfn, objFunction), '[11].some(callbackfn, objFunction) !== true');
