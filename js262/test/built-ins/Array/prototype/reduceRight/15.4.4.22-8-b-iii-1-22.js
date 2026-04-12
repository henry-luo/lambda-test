

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - element to be retrieved is inherited
    accessor property without a get function on an Array
---*/

var testResult = false;

function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 1) {
    testResult = (typeof prevVal === "undefined");
  }
}

Object.defineProperty(Array.prototype, "2", {
  set: function() {},
  configurable: true
});

var arr = [0, 1, , ];

arr.reduceRight(callbackfn);

assert(testResult, 'testResult !== true');
