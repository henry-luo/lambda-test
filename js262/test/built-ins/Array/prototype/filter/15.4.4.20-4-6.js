

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter throws TypeError if callbackfn is string
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.filter("abc");
});
