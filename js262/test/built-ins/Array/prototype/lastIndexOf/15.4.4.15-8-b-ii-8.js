

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - both array element and search
    element are numbers, and they have same value
---*/

assert.sameValue([-1, 0, 1].lastIndexOf(-1), 0, '[-1, 0, 1].lastIndexOf(-1)');
