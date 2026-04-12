

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - element to be retrieved is own data
    property on an Array-like object
---*/

var testResult = false;

function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 0) {
    testResult = (prevVal === 1);
  }
}

var obj = {
  0: 0,
  1: 1,
  length: 2
};

Array.prototype.reduceRight.call(obj, callbackfn);

assert(testResult, 'testResult !== true');
