

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - value of 'fromIndex' is an Object, which
    has an own toString method
---*/


var fromIndex = {
  toString: function() {
    return '1';
  }
};

assert.sameValue([0, true].indexOf(true, fromIndex), 1, '[0, true].indexOf(true, fromIndex)');
