

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf returns -1 if 'length' is 0 (generic
    'array' with length 0 )
---*/

var i = Array.prototype.indexOf.call({
  length: 0
}, 1);


assert.sameValue(i, -1, 'i');
