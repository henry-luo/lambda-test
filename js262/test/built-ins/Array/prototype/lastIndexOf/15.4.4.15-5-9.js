

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is a number
    (value is -0)
---*/

assert.sameValue([0, true].lastIndexOf(true, -0), -1, '[0, true].lastIndexOf(true, -0)');
assert.sameValue([true, 0].lastIndexOf(true, -0), 0, '[true, 0].lastIndexOf(true, -0)');
