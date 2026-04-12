

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf returns correct index when 'fromIndex'
    is -1
---*/

assert.sameValue([1, 2, 3, 4].lastIndexOf(4, -1), 3, '[1, 2, 3, 4].lastIndexOf(4, -1)');
