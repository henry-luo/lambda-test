

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - side-effects are visible in subsequent
    iterations on an Array-like object
---*/

var preIterVisible = false;
var obj = {
  length: 2
};

Object.defineProperty(obj, "0", {
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

assert.sameValue(Array.prototype.indexOf.call(obj, true), 1, 'Array.prototype.indexOf.call(obj, true)');
