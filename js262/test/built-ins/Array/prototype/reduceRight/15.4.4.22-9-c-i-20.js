

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - element to be retrieved is own
    accessor property without a get function that overrides an
    inherited accessor property on an Array
---*/

var testResult = false;

function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 1) {
    testResult = (typeof curVal === "undefined");
  }
}

Array.prototype[1] = 1;
var arr = [0, , 2];
Object.defineProperty(arr, "1", {
  set: function() {},
  configurable: true
});

arr.reduceRight(callbackfn, "initialValue");

assert(testResult, 'testResult !== true');
