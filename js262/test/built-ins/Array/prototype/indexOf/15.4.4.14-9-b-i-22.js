

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - element to be retrieved is inherited
    accessor property without a get function on an Array-like object
---*/

Object.defineProperty(Object.prototype, "0", {
  set: function() {},
  configurable: true
});

assert.sameValue(Array.prototype.indexOf.call({
  length: 1
}, undefined), 0, 'Array.prototype.indexOf.call({ length: 1 }, undefined)');
