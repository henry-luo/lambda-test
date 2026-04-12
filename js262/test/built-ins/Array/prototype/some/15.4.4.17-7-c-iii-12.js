

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - return value of callbackfn is a number
    (value is NaN)
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return NaN;
}

assert.sameValue([11].some(callbackfn), false, '[11].some(callbackfn)');
