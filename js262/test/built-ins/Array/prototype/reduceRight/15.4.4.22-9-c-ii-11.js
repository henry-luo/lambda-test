

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - callbackfn is called with 2 formal
    parameter
---*/

var testResult = false;

function callbackfn(prevVal, curVal) {
  if (prevVal === 100) {
    testResult = true;
  }
  return curVal > 10;
}

assert.sameValue([11].reduceRight(callbackfn, 100), true, '[11].reduceRight(callbackfn, 100)');
assert(testResult, 'testResult !== true');
