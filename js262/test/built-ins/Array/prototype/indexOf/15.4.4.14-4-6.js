

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf returns -1 if 'length' is 0 (subclassed
    Array, length overridden with obj with valueOf)
---*/

var i = Array.prototype.indexOf.call({
  length: {
    valueOf: function() {
      return 0;
    }
  }
}, 1);


assert.sameValue(i, -1, 'i');
