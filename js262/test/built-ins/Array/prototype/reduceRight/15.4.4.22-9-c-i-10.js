

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - element to be retrieved is own
    accessor property on an Array
---*/

var testResult = false;

function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 1) {
    testResult = (curVal === 1);
  }
}

var arr = [0, , 2];

Object.defineProperty(arr, "1", {
  get: function() {
    return 1;
  },
  configurable: true
});

arr.reduceRight(callbackfn, "initialValue");

assert(testResult, 'testResult !== true');
