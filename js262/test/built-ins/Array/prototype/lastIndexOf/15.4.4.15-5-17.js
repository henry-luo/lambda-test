

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - value of 'fromIndex' is a string
    containing -Infinity
---*/

assert.sameValue([true].lastIndexOf(true, "-Infinity"), -1, '[true].lastIndexOf(true, "-Infinity")');
