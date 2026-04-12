

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce applied to String object
---*/

function callbackfn(prevVal, curVal, idx, obj) {
  return obj instanceof String;
}

var obj = new String("abc");

assert(Array.prototype.reduce.call(obj, callbackfn, 1), 'Array.prototype.reduce.call(obj, callbackfn, 1) !== true');
