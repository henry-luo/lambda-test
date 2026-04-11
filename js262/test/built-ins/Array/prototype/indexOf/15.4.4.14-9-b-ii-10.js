

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - both array element and search element
    are Boolean type, and they have same value
---*/

assert.sameValue([false, true].indexOf(true), 1, '[false, true].indexOf(true)');
