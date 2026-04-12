

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - element to be retrieved is inherited
    accessor property without a get function on an Array
---*/

function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return typeof val === "undefined";
  }
  return false;
}

Object.defineProperty(Array.prototype, "0", {
  set: function() {},
  configurable: true
});

var testResult = [, ].map(callbackfn);

assert.sameValue(testResult[0], true, 'testResult[0]');
