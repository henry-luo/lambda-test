

/*---
esid: sec-array.prototype.some
description: Array.prototype.some applied to the Arguments object
---*/

function callbackfn(val, idx, obj) {
  return '[object Arguments]' === Object.prototype.toString.call(obj);
}

var obj = (function() {
  return arguments;
}("a", "b"));

assert(Array.prototype.some.call(obj, callbackfn), 'Array.prototype.some.call(obj, callbackfn) !== true');
