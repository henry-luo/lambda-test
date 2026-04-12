

/*---
esid: sec-array.prototype.map
description: Array.prototype.map throws TypeError if callbackfn is string
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.map("abc");
});
