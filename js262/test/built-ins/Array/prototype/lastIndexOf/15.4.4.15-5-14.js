

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is a number
    (value is NaN)
---*/


assert.sameValue([0, true].lastIndexOf(true, NaN), -1, '[0, true].lastIndexOf(true, NaN)');
assert.sameValue([true, 0].lastIndexOf(true, NaN), 0, '[true, 0].lastIndexOf(true, NaN)');
assert.sameValue([0, true].lastIndexOf(true, -NaN), -1, '[0, true].lastIndexOf(true, -NaN)');
assert.sameValue([true, 0].lastIndexOf(true, -NaN), 0, '[true, 0].lastIndexOf(true, -NaN)');
