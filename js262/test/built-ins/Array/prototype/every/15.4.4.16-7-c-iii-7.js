

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - return value of callbackfn is a nunmber
    (value is -0)
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return -0;
}

assert.sameValue([11].every(callbackfn), false, '[11].every(callbackfn)');
assert(accessed, 'accessed !== true');
