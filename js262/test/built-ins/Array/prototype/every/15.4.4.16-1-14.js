

/*---
esid: sec-array.prototype.every
description: Array.prototype.every applied to Error object
---*/

function callbackfn(val, idx, obj) {
  return !(obj instanceof Error);
}

var obj = new Error();
obj.length = 1;
obj[0] = 1;

assert.sameValue(Array.prototype.every.call(obj, callbackfn), false, 'Array.prototype.every.call(obj, callbackfn)');
