

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - side-effects are visible in subsequent
    iterations on an Array
---*/

var preIterVisible = false;
var arr = [];

Object.defineProperty(arr, "0", {
  get: function() {
    preIterVisible = true;
    return false;
  },
  configurable: true
});

Object.defineProperty(arr, "1", {
  get: function() {
    if (preIterVisible) {
      return true;
    } else {
      return false;
    }
  },
  configurable: true
});

assert.sameValue(arr.indexOf(true), 1, 'arr.indexOf(true)');
