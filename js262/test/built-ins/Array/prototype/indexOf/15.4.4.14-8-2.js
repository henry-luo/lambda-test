

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf returns correct index when 'fromIndex' is
    -1
---*/

assert.sameValue([1, 2, 3, 4].indexOf(4, -1), 3, '[1, 2, 3, 4].indexOf(4, -1)');
