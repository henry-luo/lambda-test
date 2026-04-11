

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - element to be retrieved is own data
    property on an Array-like object
---*/

var testResult = false;

function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 0) {
    testResult = (curVal === 0);
  }
}

var obj = {
  0: 0,
  1: 1,
  2: 2,
  length: 2
};
Array.prototype.reduceRight.call(obj, callbackfn, "initialValue");

assert(testResult, 'testResult !== true');
