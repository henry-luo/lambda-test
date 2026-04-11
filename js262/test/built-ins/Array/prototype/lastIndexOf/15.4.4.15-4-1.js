

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf returns -1 if 'length' is 0 (empty
    array)
---*/

var i = [].lastIndexOf(42);

assert.sameValue(i, -1, 'i');
