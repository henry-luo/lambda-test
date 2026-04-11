

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf -  deleting own property with
    prototype property causes prototype index property to be visited
    on an Array
---*/

var arr = [0, 111, 2];

Object.defineProperty(arr, "2", {
  get: function() {
    delete arr[1];
    return 0;
  },
  configurable: true
});

Array.prototype[1] = 1;

assert.sameValue(arr.lastIndexOf(1), 1, 'arr.lastIndexOf(1)');
