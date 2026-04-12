

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - value of 'fromIndex' is a string
    containing an exponential number
---*/

var targetObj = {};

assert.sameValue([0, 1, targetObj, 3, 4].indexOf(targetObj, "3E0"), -1, '[0, 1, targetObj, 3, 4].indexOf(targetObj, "3E0")');
assert.sameValue([0, 1, 2, targetObj, 4].indexOf(targetObj, "3E0"), 3, '[0, 1, 2, targetObj, 4].indexOf(targetObj, "3E0")');
