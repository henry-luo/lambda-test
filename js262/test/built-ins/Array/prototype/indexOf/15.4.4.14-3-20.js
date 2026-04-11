

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - value of 'length' is an Object which has
    an own valueOf method.
---*/


var obj = {
  1: true,
  2: 2,
  length: {
    valueOf: function() {
      return 2;
    }
  }
};

assert.sameValue(Array.prototype.indexOf.call(obj, true), 1, 'Array.prototype.indexOf.call(obj, true)');
assert.sameValue(Array.prototype.indexOf.call(obj, 2), -1, 'Array.prototype.indexOf.call(obj, 2)');
