

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter throws TypeError if callbackfn is boolean
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.filter(true);
});
