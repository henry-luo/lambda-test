

/*---
esid: sec-array.prototype.foreach
es5id: 15.4.4.18-4-5
description: Array.prototype.forEach throws TypeError if callbackfn is number
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.forEach(5);
});
