

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - value of 'fromIndex' is a number (value
    is negative number)
---*/

var targetObj = {};

assert.sameValue([0, targetObj, 2].indexOf(targetObj, -1), -1, '[0, targetObj, 2].indexOf(targetObj, -1)');
assert.sameValue([0, 1, targetObj].indexOf(targetObj, -1), 2, '[0, 1, targetObj].indexOf(targetObj, -1)');
