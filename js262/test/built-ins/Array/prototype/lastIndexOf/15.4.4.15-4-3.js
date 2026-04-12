

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf returns -1 if 'length' is 0 (length
    overridden to false (type conversion))
---*/

var i = Array.prototype.lastIndexOf.call({
  length: false
}, 1);


assert.sameValue(i, -1, 'i');
