

/*---
esid: sec-array.prototype.foreach
es5id: 15.4.4.18-4-1
description: Array.prototype.forEach throws TypeError if callbackfn is undefined
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.forEach();
});
