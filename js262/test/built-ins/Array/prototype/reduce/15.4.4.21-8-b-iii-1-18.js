

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - element to be retrieved is own accessor
    property without a get function on an Array
---*/

var testResult = false;

function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 1) {
    testResult = (prevVal === undefined);
  }
}

var arr = [, 1, 2];

Object.defineProperty(arr, "0", {
  set: function() {},
  configurable: true
});

arr.reduce(callbackfn);

assert(testResult, 'testResult !== true');
