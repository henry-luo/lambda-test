

/*---
esid: sec-array.prototype.some
description: Array.prototype.some applied to Error object
---*/

function callbackfn(val, idx, obj) {
  return obj instanceof Error;
}

var obj = new Error();
obj.length = 1;
obj[0] = 1;

assert(Array.prototype.some.call(obj, callbackfn), 'Array.prototype.some.call(obj, callbackfn) !== true');
