

/*---
esid: sec-array.prototype.every
description: Array.prototype.every applied to string primitive
---*/

function callbackfn(val, idx, obj) {
  return !(obj instanceof String);
}

assert.sameValue(Array.prototype.every.call("hello\nworld\\!", callbackfn), false, 'Array.prototype.every.call("hello\nworld\\!", callbackfn)');
