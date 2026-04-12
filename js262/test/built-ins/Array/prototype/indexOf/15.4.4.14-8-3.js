

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf returns -1 when abs('fromIndex') is length
    of array - 1
---*/

assert.sameValue([1, 2, 3, 4].indexOf(1, -3), -1, '[1, 2, 3, 4].indexOf(1, -3)');
