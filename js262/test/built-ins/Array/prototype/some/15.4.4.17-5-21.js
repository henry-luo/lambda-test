

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - the global object can be used as thisArg
---*/

var global = this;

function callbackfn(val, idx, obj) {
  return this === global;
}

assert([11].some(callbackfn, this), '[11].some(callbackfn, global) !== true');
