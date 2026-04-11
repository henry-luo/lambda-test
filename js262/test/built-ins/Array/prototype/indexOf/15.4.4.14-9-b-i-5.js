

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - element to be retrieved is own data
    property that overrides an inherited accessor property on an Array
---*/

Object.defineProperty(Array.prototype, "0", {
  get: function() {
    return false;
  },
  configurable: true
});

assert.sameValue([true].indexOf(true), 0, '[true].indexOf(true)');
