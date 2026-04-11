

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - both type of array element and type of
    search element are null
---*/

assert.sameValue([null].indexOf(null), 0, '[null].indexOf(null)');
