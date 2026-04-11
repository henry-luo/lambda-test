

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter throws TypeError if callbackfn is number
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.filter(5);
});
