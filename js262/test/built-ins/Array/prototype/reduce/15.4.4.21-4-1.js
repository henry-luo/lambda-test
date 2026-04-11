

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce throws TypeError if callbackfn is undefined
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.reduce();
});
