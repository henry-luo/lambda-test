

/*---
esid: sec-array.prototype.every
es5id: 15.4.4.16-4-7
description: >
    Array.prototype.every throws TypeError if callbackfn is Object
    without a Call internal method
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.every({});
});
