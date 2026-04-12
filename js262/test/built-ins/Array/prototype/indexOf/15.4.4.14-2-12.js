

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - 'length' is own accessor property
    without a get function that overrides an inherited accessor
    property
---*/

Object.defineProperty(Object.prototype, "length", {
  get: function() {
    return 20;
  },
  configurable: true
});

var obj = {
  1: 1
};
Object.defineProperty(obj, "length", {
  set: function() {},
  configurable: true
});

assert.sameValue(Array.prototype.indexOf.call(obj, 1), -1, 'Array.prototype.indexOf.call(obj, 1)');
