

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - element to be retrieved is own data
    property on an Array
---*/

var testResult = false;

function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 1) {
    testResult = (prevVal === 0);
  }
}

var arr = [0, 1, 2];
arr.reduce(callbackfn);

assert(testResult, 'testResult !== true');
