

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - Boolean object can be used as thisArg
---*/

var objBoolean = new Boolean();

function callbackfn(val, idx, obj) {
  return this === objBoolean;
}

assert([11].some(callbackfn, objBoolean), '[11].some(callbackfn, objBoolean) !== true');
