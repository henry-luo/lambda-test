

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - value of 'fromIndex' is a number (value
    is NaN)
---*/

assert.sameValue([true].indexOf(true, NaN), 0, '[true].indexOf(true, NaN)');
assert.sameValue([true].indexOf(true, -NaN), 0, '[true].indexOf(true, -NaN)');
