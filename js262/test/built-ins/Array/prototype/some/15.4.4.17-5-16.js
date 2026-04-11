

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - RegExp object can be used as thisArg
---*/

var objRegExp = new RegExp();

function callbackfn(val, idx, obj) {
  return this === objRegExp;
}

assert([11].some(callbackfn, objRegExp), '[11].some(callbackfn, objRegExp) !== true');
