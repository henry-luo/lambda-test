

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - both type of array element and type
    of search element are Null
---*/

assert.sameValue([null].lastIndexOf(null), 0, '[null].lastIndexOf(null)');
