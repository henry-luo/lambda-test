

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - String object can be used as thisArg
---*/

var objString = new String();

function callbackfn(val, idx, obj) {
  return this === objString;
}

assert([11].some(callbackfn, objString), '[11].some(callbackfn, objString) !== true');
