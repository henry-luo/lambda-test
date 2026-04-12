

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - value of 'length' is a number (value is
    Infinity)
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return val > 10;
}

var obj = {
  0: 11,
  length: Infinity
};

assert(Array.prototype.some.call(obj, callbackfn), 'Array.prototype.some.call(obj, callbackfn) !== true');
assert(accessed, 'accessed !== true');
