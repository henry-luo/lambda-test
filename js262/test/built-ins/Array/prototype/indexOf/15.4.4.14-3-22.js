

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf throws TypeError exception when 'length'
    is an object with toString and valueOf methods that don�t return
    primitive values
---*/

var toStringAccessed = false;
var valueOfAccessed = false;

var obj = {
  length: {
    toString: function() {
      toStringAccessed = true;
      return {};
    },

    valueOf: function() {
      valueOfAccessed = true;
      return {};
    }
  }
};

assert.throws(TypeError, function() {
  Array.prototype.indexOf.call(obj);
});

assert(toStringAccessed, 'toStringAccessed');
assert(valueOfAccessed, 'valueOfAccessed');
