

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - element to be retrieved is inherited
    accessor property without a get function on an Array
---*/

Object.defineProperty(Array.prototype, "0", {
  set: function() {},
  configurable: true
});

assert.sameValue([, ].lastIndexOf(undefined), 0, '[, ].lastIndexOf(undefined)');
