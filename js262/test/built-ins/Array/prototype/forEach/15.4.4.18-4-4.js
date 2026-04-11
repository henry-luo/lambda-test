

/*---
esid: sec-array.prototype.foreach
es5id: 15.4.4.18-4-4
description: Array.prototype.forEach throws TypeError if callbackfn is boolean
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.forEach(true);
});
