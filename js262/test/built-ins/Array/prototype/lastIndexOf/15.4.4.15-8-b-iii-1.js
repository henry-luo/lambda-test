

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf returns index of last one when more
    than two elements in array are eligible
---*/

assert.sameValue([2, 1, 2, 2, 1].lastIndexOf(2), 3, '[2, 1, 2, 2, 1].lastIndexOf(2)');
