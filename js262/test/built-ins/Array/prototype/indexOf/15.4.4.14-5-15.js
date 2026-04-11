

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - value of 'fromIndex' is a string
    containing a negative number
---*/

assert.sameValue([0, true, 2].indexOf(true, "-1"), -1, '[0, true, 2].indexOf(true, "-1")');
assert.sameValue([0, 1, true].indexOf(true, "-1"), 2, '[0, 1, true].indexOf(true, "-1")');
