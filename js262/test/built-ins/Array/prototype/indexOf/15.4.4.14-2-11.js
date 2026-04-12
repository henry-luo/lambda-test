

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - 'length' is own accessor property
    without a get function
---*/

var obj = {
  1: true
};
Object.defineProperty(obj, "length", {
  set: function() {},
  configurable: true
});

assert.sameValue(Array.prototype.indexOf.call(obj, true), -1, 'Array.prototype.indexOf.call(obj, true)');
