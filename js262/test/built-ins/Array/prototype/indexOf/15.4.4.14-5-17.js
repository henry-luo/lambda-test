

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - value of 'fromIndex' is a string
    containing -Infinity
---*/

assert.sameValue([true].indexOf(true, "-Infinity"), 0, '[true].indexOf(true, "-Infinity")');
