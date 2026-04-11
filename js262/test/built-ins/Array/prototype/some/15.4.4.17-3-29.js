

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - value of 'length' is boundary value (2^32 +
    1)
---*/

function callbackfn1(val, idx, obj) {
  return val > 10;
}

function callbackfn2(val, idx, obj) {
  return val > 11;
}

var obj = {
  0: 11,
  1: 12,
  length: 4294967297
};

assert(Array.prototype.some.call(obj, callbackfn1), 'Array.prototype.some.call(obj, callbackfn1) !== true');
assert(Array.prototype.some.call(obj, callbackfn2), 'Array.prototype.some.call(obj, callbackfn2) !== true');
