

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce applied to the Arguments object
---*/

function callbackfn(prevVal, curVal, idx, obj) {
  return ('[object Arguments]' === Object.prototype.toString.call(obj));
}

var obj = (function() {
  return arguments;
}("a", "b"));

assert(Array.prototype.reduce.call(obj, callbackfn, 1), 'Array.prototype.reduce.call(obj, callbackfn, 1) !== true');
