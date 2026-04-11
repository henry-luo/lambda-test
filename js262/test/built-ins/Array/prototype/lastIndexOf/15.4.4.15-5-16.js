

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is a string
    containing Infinity
---*/

var arr = [];
arr[Math.pow(2, 32) - 2] = true; 

assert.sameValue(arr.lastIndexOf(true, "Infinity"), Math.pow(2, 32) - 2, 'arr.lastIndexOf(true, "Infinity")');
