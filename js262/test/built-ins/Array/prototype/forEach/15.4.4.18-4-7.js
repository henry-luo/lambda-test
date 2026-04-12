

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach throws TypeError if callbackfn is Object
    without Call internal method
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.forEach(new Object());
});
