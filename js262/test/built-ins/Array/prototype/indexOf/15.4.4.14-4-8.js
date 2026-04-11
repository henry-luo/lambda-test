

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf returns -1 if 'length' is 0 (length is an
    empty array)
---*/


var i = Array.prototype.indexOf.call({
  length: []
}, 1);


assert.sameValue(i, -1, 'i');
