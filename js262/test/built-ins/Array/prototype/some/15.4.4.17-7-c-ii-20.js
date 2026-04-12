

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - callbackfn called with correct parameters
    (thisArg is correct)
---*/

var thisArg = {
  threshold: 10
};

function callbackfn(val, idx, obj) {
  return this === thisArg;
}

var obj = {
  0: 11,
  length: 2
};

assert(Array.prototype.some.call(obj, callbackfn, thisArg), 'Array.prototype.some.call(obj, callbackfn, thisArg) !== true');
