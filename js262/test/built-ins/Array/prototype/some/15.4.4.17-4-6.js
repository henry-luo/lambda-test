

/*---
esid: sec-array.prototype.some
description: Array.prototype.some throws TypeError if callbackfn is string
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.some("abc");
});
