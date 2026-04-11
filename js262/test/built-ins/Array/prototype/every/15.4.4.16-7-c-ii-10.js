

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - callbackfn is called with 1 formal
    parameter
---*/

var called = 0;

function callbackfn(val) {
  called++;
  return val > 10;
}

assert([11, 12].every(callbackfn), '[11, 12].every(callbackfn) !== true');
assert.sameValue(called, 2, 'called');
