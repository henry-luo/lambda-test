

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - array element is +0 and search element
    is -0
---*/

assert.sameValue([+0].indexOf(-0), 0, '[+0].indexOf(-0)');
