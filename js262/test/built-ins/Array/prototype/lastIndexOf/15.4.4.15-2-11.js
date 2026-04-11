

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - 'length' is own accessor property
    without a get function on an Array-like object
---*/

var obj = {
  0: 1
};
Object.defineProperty(obj, "length", {
  set: function() {},
  configurable: true
});

assert.sameValue(Array.prototype.lastIndexOf.call(obj, 1), -1, 'Array.prototype.lastIndexOf.call(obj, 1)');
