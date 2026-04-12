

/*---
esid: sec-array.prototype.every
es5id: 15.4.4.16-4-5
description: Array.prototype.every throws TypeError if callbackfn is number
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.every(5);
});
