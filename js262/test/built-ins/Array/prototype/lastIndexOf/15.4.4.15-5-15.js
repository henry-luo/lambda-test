

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is a string
    containing a negative number
---*/

assert.sameValue([0, "-2", 2].lastIndexOf("-2", "-2"), 1, '[0, "-2", 2].lastIndexOf("-2", "-2")');
assert.sameValue([0, 2, "-2"].lastIndexOf("-2", "-2"), -1, '[0, 2, "-2"].lastIndexOf("-2", "-2")');
