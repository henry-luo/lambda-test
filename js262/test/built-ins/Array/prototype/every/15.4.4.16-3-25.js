

/*---
esid: sec-array.prototype.every
description: Array.prototype.every - value of 'length' is a negative non-integer
---*/

function callbackfn1(val, idx, obj) {
  return val > 10;
}

function callbackfn2(val, idx, obj) {
  return val > 11;
}

var obj = {
  0: 12,
  1: 11,
  2: 9,
  length: -4294967294.5
};

assert(Array.prototype.every.call(obj, callbackfn1), 'Array.prototype.every.call(obj, callbackfn1) !== true');
assert(Array.prototype.every.call(obj, callbackfn2), 'Array.prototype.every.call(obj, callbackfn2) !== true');
