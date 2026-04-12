

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf returns -1 when abs('fromIndex') is
    length of array
---*/

assert.sameValue([1, 2, 3, 4].lastIndexOf(2, -4), -1, '[1, 2, 3, 4].lastIndexOf(2, -4)');
