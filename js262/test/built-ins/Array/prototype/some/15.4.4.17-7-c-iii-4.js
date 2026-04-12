

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - return value of callbackfn is a boolean
    (value is true)
---*/

function callbackfn(val, idx, obj) {
  return true;
}

var obj = {
  0: 11,
  length: 2
};

assert(Array.prototype.some.call(obj, callbackfn), 'Array.prototype.some.call(obj, callbackfn) !== true');
