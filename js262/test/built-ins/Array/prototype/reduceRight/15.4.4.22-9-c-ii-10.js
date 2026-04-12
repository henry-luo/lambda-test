

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - callbackfn is called with 1 formal
    parameter
---*/

var called = 0;

function callbackfn(prevVal) {
  called++;
  return prevVal;
}

assert.sameValue([11, 12].reduceRight(callbackfn, 100), 100, '[11, 12].reduceRight(callbackfn, 100)');
assert.sameValue(called, 2, 'called');
