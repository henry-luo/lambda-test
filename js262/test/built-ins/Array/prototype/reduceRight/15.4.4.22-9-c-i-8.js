

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - element to be retrieved is inherited
    data property on an Array
---*/

var testResult = false;

function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 1) {
    testResult = (curVal === 1);
  }
}

Array.prototype[0] = 0;
Array.prototype[1] = 1;
Array.prototype[2] = 2;
[, , , ].reduceRight(callbackfn, "initialValue");

assert(testResult, 'testResult !== true');
