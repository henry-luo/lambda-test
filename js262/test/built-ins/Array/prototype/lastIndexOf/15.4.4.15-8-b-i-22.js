

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - element to be retrieved is inherited
    accessor property without a get function on an Array-like object
---*/

Object.defineProperty(Object.prototype, "0", {
  set: function() {},
  configurable: true
});

assert.sameValue(Array.prototype.lastIndexOf.call({
  length: 1
}, undefined), 0, 'Array.prototype.lastIndexOf.call({ length: 1 }, undefined)');
