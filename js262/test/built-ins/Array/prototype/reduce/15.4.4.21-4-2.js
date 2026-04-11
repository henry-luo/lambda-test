

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce throws ReferenceError if callbackfn is
    unreferenced
---*/

var arr = new Array(10);
assert.throws(ReferenceError, function() {
  arr.reduce(foo);
});
