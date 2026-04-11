

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf returns -1 if 'length' is 0 ( length
    overridden to null (type conversion))
---*/

var i = Array.prototype.lastIndexOf.call({
  length: null
}, 1);


assert.sameValue(i, -1, 'i');
