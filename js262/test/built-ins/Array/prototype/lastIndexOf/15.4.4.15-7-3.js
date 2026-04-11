

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf returns -1 when abs('fromIndex') is
    length of array - 1
---*/

assert.sameValue([1, 2, 3, 4].lastIndexOf(3, -3), -1, '[1, 2, 3, 4].lastIndexOf(3, -3)');
