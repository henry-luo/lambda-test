

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - 'fromIndex' is a positive non-integer,
    verify truncation occurs in the proper direction
---*/

var targetObj = {};

assert.sameValue([0, targetObj, 2].indexOf(targetObj, 2.5), -1, '[0, targetObj, 2].indexOf(targetObj, 2.5)');
assert.sameValue([0, 1, targetObj].indexOf(targetObj, 2.5), 2, '[0, 1, targetObj].indexOf(targetObj, 2.5)');
