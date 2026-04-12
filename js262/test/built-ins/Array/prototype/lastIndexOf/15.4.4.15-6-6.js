

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf returns correct index when 'fromIndex'
    is 1
---*/

assert.sameValue([1, 2, 3].lastIndexOf(2, 1), 1, '[1, 2, 3].lastIndexOf(2, 1)');
