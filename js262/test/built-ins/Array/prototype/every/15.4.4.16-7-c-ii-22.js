

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - callbackfn called with correct parameters
    (the index k is correct)
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  if (val === 11) {
    return idx === 0;
  }

  if (val === 12) {
    return idx === 1;
  }

}

var obj = {
  0: 11,
  1: 12,
  length: 2
};

assert(Array.prototype.every.call(obj, callbackfn), 'Array.prototype.every.call(obj, callbackfn) !== true');
assert(accessed, 'accessed !== true');
