

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf returns -1 if 'length' is 0 (empty array)
---*/

var i = [].indexOf(42);

assert.sameValue(i, -1, 'i');
