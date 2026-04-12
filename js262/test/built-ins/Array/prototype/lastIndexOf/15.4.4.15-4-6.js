

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf returns -1 if 'length' is 0
    (subclassed Array, length overridden with obj with valueOf)
---*/

var i = Array.prototype.lastIndexOf.call({
  length: {
    valueOf: function() {
      return 0;
    }
  }
}, 1);


assert.sameValue(i, -1, 'i');
