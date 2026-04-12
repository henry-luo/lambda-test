

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce applied to Error object
---*/

function callbackfn(prevVal, curVal, idx, obj) {
  return obj instanceof Error;
}

var obj = new Error();
obj.length = 1;
obj[0] = 1;

assert(Array.prototype.reduce.call(obj, callbackfn, 1), 'Array.prototype.reduce.call(obj, callbackfn, 1) !== true');
