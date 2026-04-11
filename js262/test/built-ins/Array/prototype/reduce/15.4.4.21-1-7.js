

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce applied to string primitive
---*/

function callbackfn(prevVal, curVal, idx, obj) {
  return obj instanceof String;
}

assert(Array.prototype.reduce.call("abc", callbackfn, 1), 'Array.prototype.reduce.call("abc", callbackfn, 1) !== true');
