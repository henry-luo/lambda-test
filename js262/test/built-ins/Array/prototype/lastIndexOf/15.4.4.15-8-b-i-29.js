

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - side-effects are visible in
    subsequent iterations on an Array-like object
---*/

var preIterVisible = false;
var obj = {
  length: 3
};

Object.defineProperty(obj, "2", {
  get: function() {
    preIterVisible = true;
    return false;
  },
  configurable: true
});

Object.defineProperty(obj, "1", {
  get: function() {
    if (preIterVisible) {
      return true;
    } else {
      return false;
    }
  },
  configurable: true
});

assert.sameValue(Array.prototype.lastIndexOf.call(obj, true), 1, 'Array.prototype.lastIndexOf.call(obj, true)');
