

/*---
esid: sec-array.prototype.every
description: Array.prototype.every applied to the Arguments object
---*/

function callbackfn(val, idx, obj) {
  return ('[object Arguments]' !== Object.prototype.toString.call(obj));
}

var obj = (function fun() {
  return arguments;
}("a", "b"));

assert.sameValue(Array.prototype.every.call(obj, callbackfn), false, 'Array.prototype.every.call(obj, callbackfn)');
