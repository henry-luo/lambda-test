

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf returns -1 if 'length' is 0 (length is
    an empty array)
---*/


var i = Array.prototype.lastIndexOf.call({
  length: []
}, 1);


assert.sameValue(i, -1, 'i');
