

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - value of 'fromIndex' is a number (value
    is Infinity)
---*/

var arr = [];
arr[Math.pow(2, 32) - 2] = true; 

assert.sameValue(arr.indexOf(true, Infinity), -1, 'arr.indexOf(true, Infinity)');
