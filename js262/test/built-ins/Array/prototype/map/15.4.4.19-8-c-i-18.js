

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - element to be retrieved is own accessor
    property without a get function on an Array
---*/

function callbackfn(val, idx, obj) {
  if (idx === 1) {
    return typeof val === "undefined";
  }
  return false;
}

var arr = [];

Object.defineProperty(arr, "1", {
  set: function() {},
  configurable: true
});

var testResult = arr.map(callbackfn);

assert.sameValue(testResult[1], true, 'testResult[1]');
