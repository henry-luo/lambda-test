

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf returns correct index when 'fromIndex'
    is length of array - 1
---*/

assert.sameValue([1, 2, 3].lastIndexOf(3, 2), 2, '[1, 2, 3].lastIndexOf(3, 2)');
