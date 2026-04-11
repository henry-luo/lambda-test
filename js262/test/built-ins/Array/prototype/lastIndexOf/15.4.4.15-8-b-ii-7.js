

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf - array element is -0 and search
    element is +0
---*/

assert.sameValue([-0].lastIndexOf(+0), 0, '[-0].lastIndexOf(+0)');
