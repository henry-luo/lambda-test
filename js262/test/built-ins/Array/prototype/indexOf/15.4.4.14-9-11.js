

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - the length of iteration isn't changed by
    adding elements to the array during iteration
---*/

var arr = [20];

Object.defineProperty(arr, "0", {
  get: function() {
    arr[1] = 1;
    return 0;
  },
  configurable: true
});

assert.sameValue(arr.indexOf(1), -1, 'arr.indexOf(1)');
