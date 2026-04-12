

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - callbackfn is called with 0 formal
    parameter
---*/

var called = 0;

function callbackfn() {
  called++;
}

[11, 12].reduce(callbackfn, 1);

assert.sameValue(called, 2, 'called');
