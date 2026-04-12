

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is a number
    (value is Infinity)
---*/

var arr = [];
arr[Math.pow(2, 32) - 2] = null; 

assert.sameValue(arr.lastIndexOf(null, Infinity), Math.pow(2, 32) - 2, 'arr.lastIndexOf(null, Infinity)');
