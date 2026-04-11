

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter applied to the Math object
---*/

function callbackfn(val, idx, obj) {
  return '[object Math]' === Object.prototype.toString.call(obj);
}

Math.length = 1;
Math[0] = 1;
var newArr = Array.prototype.filter.call(Math, callbackfn);

assert.sameValue(newArr[0], 1, 'newArr[0]');
