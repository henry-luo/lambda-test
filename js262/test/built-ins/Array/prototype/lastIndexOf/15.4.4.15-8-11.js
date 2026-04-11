

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - the length of iteration isn't
    changed by adding elements to the array during iteration
---*/

var arr = [20];

Object.defineProperty(arr, "0", {
  get: function() {
    arr[1] = 1;
    return 0;
  },
  configurable: true
});

assert.sameValue(arr.lastIndexOf(1), -1, 'arr.lastIndexOf(1)');
