

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - value of 'fromIndex' is an Object, which
    has an own valueOf method
---*/

var fromIndex = {
  valueOf: function() {
    return 1;
  }
};


assert.sameValue([0, true].indexOf(true, fromIndex), 1, '[0, true].indexOf(true, fromIndex)');
