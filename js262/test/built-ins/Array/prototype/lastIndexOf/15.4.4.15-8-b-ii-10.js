

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - both array element and search
    element are booleans, and they have same value
---*/

assert.sameValue([false, true].lastIndexOf(true), 1, '[false, true].lastIndexOf(true)');
