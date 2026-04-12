

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf - non-existent property wouldn't be called
---*/

assert.sameValue([0, , 2].indexOf(undefined), -1, '[0, , 2].indexOf(undefined)');
