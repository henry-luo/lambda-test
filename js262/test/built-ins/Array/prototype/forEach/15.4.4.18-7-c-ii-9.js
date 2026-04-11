

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach - callbackfn is called with 0 formal
    parameter
---*/

var called = 0;

function callbackfn() {
  called++;
}

[11, 12].forEach(callbackfn);

assert.sameValue(called, 2, 'called');
