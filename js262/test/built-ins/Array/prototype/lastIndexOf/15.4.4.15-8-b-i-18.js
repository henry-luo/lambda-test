

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - element to be retrieved is own
    accessor property without a get function on an Array-like object
---*/

var obj = {
  length: 1
};
Object.defineProperty(obj, "0", {
  set: function() {},
  configurable: true
});

assert.sameValue(Array.prototype.lastIndexOf.call(obj, undefined), 0, 'Array.prototype.lastIndexOf.call(obj, undefined)');
