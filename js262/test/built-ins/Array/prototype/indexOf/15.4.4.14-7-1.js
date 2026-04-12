

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf returns -1 when 'fromIndex' is length of
    array - 1
---*/

assert.sameValue([1, 2, 3].indexOf(1, 2), -1, '[1, 2, 3].indexOf(1, 2)');
