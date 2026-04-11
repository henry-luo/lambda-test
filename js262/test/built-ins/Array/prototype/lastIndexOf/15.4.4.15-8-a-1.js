

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - added properties in step 2 are
    visible here
---*/

var arr = {};

Object.defineProperty(arr, "length", {
  get: function() {
    arr[2] = "length";
    return 3;
  },
  configurable: true
});

assert.sameValue(Array.prototype.lastIndexOf.call(arr, "length"), 2, 'Array.prototype.lastIndexOf.call(arr, "length")');
