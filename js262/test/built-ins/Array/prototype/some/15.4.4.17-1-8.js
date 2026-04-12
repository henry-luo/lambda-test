

/*---
esid: sec-array.prototype.some
description: Array.prototype.some applied to String object
---*/

function callbackfn(val, idx, obj) {
  return obj instanceof String;
}

var obj = new String("hello\nw_orld\\!");

assert(Array.prototype.some.call(obj, callbackfn), 'Array.prototype.some.call(obj, callbackfn) !== true');
