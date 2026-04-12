

/*---
esid: sec-array.prototype.every
es5id: 15.4.4.16-4-3
description: Array.prototype.every throws TypeError if callbackfn is null
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.every(null);
});
