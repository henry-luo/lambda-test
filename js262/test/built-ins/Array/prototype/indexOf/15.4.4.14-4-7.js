

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf returns -1 if 'length' is 0 ( length is
    object overridden with obj w/o valueOf (toString))
---*/


var i = Array.prototype.indexOf.call({
  length: {
    toString: function() {
      return '0';
    }
  }
}, 1);


assert.sameValue(i, -1, 'i');
