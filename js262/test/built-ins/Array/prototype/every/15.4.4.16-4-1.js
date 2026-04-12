

/*---
esid: sec-array.prototype.every
es5id: 15.4.4.16-4-1
description: Array.prototype.every throws TypeError if callbackfn is undefined
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.every();
});
