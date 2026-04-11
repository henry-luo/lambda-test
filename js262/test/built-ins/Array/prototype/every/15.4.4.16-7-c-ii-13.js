

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - callbackfn that uses arguments object to
    get parameter value
---*/

var called = 0;

function callbackfn() {
  called++;
  return arguments[2][arguments[1]] === arguments[0];
}

assert([11, 12].every(callbackfn), '[11, 12].every(callbackfn) !== true');
assert.sameValue(called, 2, 'called');
