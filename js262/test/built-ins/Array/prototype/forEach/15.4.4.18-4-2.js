

/*---
esid: sec-array.prototype.foreach
es5id: 15.4.4.18-4-2
description: >
    Array.prototype.forEach throws ReferenceError if callbackfn is
    unreferenced
---*/

var arr = new Array(10);
assert.throws(ReferenceError, function() {
  arr.forEach(foo);
});
