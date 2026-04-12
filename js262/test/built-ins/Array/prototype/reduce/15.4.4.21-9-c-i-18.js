

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - element to be retrieved is own accessor
    property without a get function on an Array
---*/

var testResult = false;
var initialValue = 0;

function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 1) {
    testResult = (curVal === undefined);
  }
}

var arr = [0, , 2];

Object.defineProperty(arr, "1", {
  set: function() {},
  configurable: true
});

arr.reduce(callbackfn, initialValue);

assert(testResult, 'testResult !== true');
