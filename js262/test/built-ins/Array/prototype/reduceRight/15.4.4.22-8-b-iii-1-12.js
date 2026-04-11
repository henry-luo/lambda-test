

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - element to be retrieved is own
    accessor property that overrides an inherited data property on an
    Array
---*/

var testResult = false;

function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 1) {
    testResult = (prevVal === "20");
  }
}

Array.prototype[2] = 2;
var arr = [0, 1];

Object.defineProperty(arr, "2", {
  get: function() {
    return "20";
  },
  configurable: true
});

arr.reduceRight(callbackfn);

assert(testResult, 'testResult !== true');
