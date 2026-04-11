

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - added properties in step 5 are visible
    here on an Array
---*/

var arr = [];
arr.length = 30;
var targetObj = function() {};

var fromIndex = {
  valueOf: function() {
    arr[4] = targetObj;
    return 3;
  }
};

assert.sameValue(arr.indexOf(targetObj, fromIndex), 4, 'arr.indexOf(targetObj, fromIndex)');
