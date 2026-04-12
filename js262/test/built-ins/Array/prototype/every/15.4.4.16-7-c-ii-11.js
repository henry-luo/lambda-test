

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - callbackfn is called with 2 formal
    parameter
---*/

var called = 0;

function callbackfn(val, idx) {
  called++;
  return val > 10 && arguments[2][idx] === val;
}

assert([11, 12].every(callbackfn), '[11, 12].every(callbackfn) !== true');
assert.sameValue(called, 2, 'called');
