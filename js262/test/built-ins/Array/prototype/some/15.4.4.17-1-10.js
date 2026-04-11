

/*---
esid: sec-array.prototype.some
description: Array.prototype.some applied to the Math object
---*/

function callbackfn(val, idx, obj) {
  return '[object Math]' === Object.prototype.toString.call(obj);
}

Math.length = 1;
Math[0] = 1;

assert(Array.prototype.some.call(Math, callbackfn), 'Array.prototype.some.call(Math, callbackfn) !== true');
