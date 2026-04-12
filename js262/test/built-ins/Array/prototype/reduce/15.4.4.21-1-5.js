

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce applied to number primitive
---*/

function callbackfn(prevVal, curVal, idx, obj) {
  return obj instanceof Number;
}

Number.prototype[0] = 1;
Number.prototype.length = 1;

assert(Array.prototype.reduce.call(2.5, callbackfn, 1), 'Array.prototype.reduce.call(2.5, callbackfn, 1) !== true');
