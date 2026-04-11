

/*---
esid: sec-array.prototype.every
es5id: 15.4.4.16-4-4
description: Array.prototype.every throws TypeError if callbackfn is boolean
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.every(true);
});
