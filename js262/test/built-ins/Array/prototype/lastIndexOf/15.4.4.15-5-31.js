

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - 'fromIndex' is a positive
    non-integer, verify truncation occurs in the proper direction
---*/

var targetObj = {};

assert.sameValue([0, targetObj, true].lastIndexOf(targetObj, 1.5), 1, '[0, targetObj, true].lastIndexOf(targetObj, 1.5)');
assert.sameValue([0, true, targetObj].lastIndexOf(targetObj, 1.5), -1, '[0, true, targetObj].lastIndexOf(targetObj, 1.5)');
