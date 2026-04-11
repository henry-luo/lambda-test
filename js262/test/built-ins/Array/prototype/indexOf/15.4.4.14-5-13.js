

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - value of 'fromIndex' is a number (value
    is -Infinity)
---*/

assert.sameValue([true].indexOf(true, -Infinity), 0, '[true].indexOf(true, -Infinity)');
