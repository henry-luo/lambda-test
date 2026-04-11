

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - element to be retrieved is own
    accessor property that overrides an inherited accessor property on
    an Array
---*/

var arr = [];

Object.defineProperty(Array.prototype, "0", {
  get: function() {
    return false;
  },
  configurable: true
});

Object.defineProperty(arr, "0", {
  get: function() {
    return true;
  },
  configurable: true
});

assert.sameValue(arr.lastIndexOf(true), 0, 'arr.lastIndexOf(true)');
