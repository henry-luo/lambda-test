

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce applied to the Math object
---*/

function callbackfn(prevVal, curVal, idx, obj) {
  return ('[object Math]' === Object.prototype.toString.call(obj));
}

Math.length = 1;
Math[0] = 1;

assert(Array.prototype.reduce.call(Math, callbackfn, 1), 'Array.prototype.reduce.call(Math, callbackfn, 1) !== true');
