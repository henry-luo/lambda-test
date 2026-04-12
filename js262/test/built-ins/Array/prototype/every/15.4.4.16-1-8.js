

/*---
esid: sec-array.prototype.every
description: Array.prototype.every applied to String object
---*/

function callbackfn(val, idx, obj) {
  return !(obj instanceof String);
}

var obj = new String("hello\nworld\\!");

assert.sameValue(Array.prototype.every.call(obj, callbackfn), false, 'Array.prototype.every.call(obj, callbackfn)');
