

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map throws TypeError if callbackfn is Object
    without Call internal method
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.map(new Object());
});
