

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - both array element and search element
    are Number, and they have same value
---*/

assert.sameValue([-1, 0, 1].indexOf(1), 2, '[-1, 0, 1].indexOf(1)');
