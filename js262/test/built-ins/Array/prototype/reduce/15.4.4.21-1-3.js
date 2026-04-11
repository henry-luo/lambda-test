

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce applied to boolean primitive
---*/

function callbackfn(prevVal, curVal, idx, obj) {
  return obj instanceof Boolean;
}

Boolean.prototype[0] = true;
Boolean.prototype.length = 1;

assert(Array.prototype.reduce.call(false, callbackfn, 1), 'Array.prototype.reduce.call(false, callbackfn, 1) !== true');
