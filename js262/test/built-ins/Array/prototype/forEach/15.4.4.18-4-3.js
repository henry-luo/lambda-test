

/*---
esid: sec-array.prototype.foreach
es5id: 15.4.4.18-4-3
description: Array.prototype.forEach throws TypeError if callbackfn is null
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.forEach(null);
});
