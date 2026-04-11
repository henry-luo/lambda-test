

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf terminates iteration on unhandled
    exception on an Array
---*/

var accessed = false;
var arr = [];

Object.defineProperty(arr, "2", {
  get: function() {
    throw new TypeError();
  },
  configurable: true
});

Object.defineProperty(arr, "1", {
  get: function() {
    accessed = true;
    return true;
  },
  configurable: true
});
assert.throws(TypeError, function() {
  arr.lastIndexOf(true);
});
assert.sameValue(accessed, false, 'accessed');
