

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - element to be retrieved is own
    accessor property without a get function on an Array
---*/

var arr = [];
Object.defineProperty(arr, "0", {
  set: function() {},
  configurable: true
});

assert.sameValue(arr.lastIndexOf(undefined), 0, 'arr.lastIndexOf(undefined)');
