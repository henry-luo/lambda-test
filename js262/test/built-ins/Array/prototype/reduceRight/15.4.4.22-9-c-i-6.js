

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - element to be retrieved is own data
    property that overrides an inherited accessor property on an Array
---*/

var testResult = false;

function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 1) {
    testResult = (curVal === 1);
  }
}

Object.defineProperty(Array.prototype, "1", {
  get: function() {
    return "11";
  },
  configurable: true
});
[0, 1, 2].reduceRight(callbackfn, "initialValue");

assert(testResult, 'testResult !== true');
