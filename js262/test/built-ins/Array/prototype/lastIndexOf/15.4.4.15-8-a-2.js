

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf -  added properties in step 5 are
    visible here on an Array-like object
---*/

var arr = {
  length: 30
};
var targetObj = function() {};

var fromIndex = {
  valueOf: function() {
    arr[4] = targetObj;
    return 10;
  }
};


assert.sameValue(Array.prototype.lastIndexOf.call(arr, targetObj, fromIndex), 4, 'Array.prototype.lastIndexOf.call(arr, targetObj, fromIndex)');
