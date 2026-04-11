

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf -  deleted properties of step 5 are
    visible here on an Array-like object
---*/

var arr = {
  10: false,
  length: 30
};

var fromIndex = {
  valueOf: function() {
    delete arr[10];
    return 15;
  }
};

assert.sameValue(Array.prototype.lastIndexOf.call(arr, false, fromIndex), -1, 'Array.prototype.lastIndexOf.call(arr, false, fromIndex)');
