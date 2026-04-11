

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - returns index of last one when more than
    two elements in array are eligible
---*/

assert.sameValue([1, 2, 2, 1, 2].indexOf(2), 1, '[1, 2, 2, 1, 2].indexOf(2)');
