

/*---
esid: sec-array.prototype.every
description: Array.prototype.every applied to the Math object
---*/

function callbackfn(val, idx, obj) {
  return ('[object Math]' !== Object.prototype.toString.call(obj));
}

Math.length = 1;
Math[0] = 1;

assert.sameValue(Array.prototype.every.call(Math, callbackfn), false, 'Array.prototype.every.call(Math, callbackfn)');
