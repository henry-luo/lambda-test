

/*---
esid: sec-array.prototype.some
description: Array.prototype.some applied to boolean primitive
---*/

function callbackfn(val, idx, obj) {
  return obj instanceof Boolean;
}

Boolean.prototype[0] = 1;
Boolean.prototype.length = 1;

assert(Array.prototype.some.call(false, callbackfn), 'Array.prototype.some.call(false, callbackfn) !== true');
