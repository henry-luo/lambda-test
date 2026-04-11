

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - element to be retrieved is own data
    property that overrides an inherited data property on an
    Array-like object
---*/

Object.prototype[0] = false;

assert.sameValue(Array.prototype.lastIndexOf.call({
  0: true,
  1: 1,
  length: 2
}, true), 0, 'Array.prototype.lastIndexOf.call({ 0: true, 1: 1, length: 2 }, true)');
