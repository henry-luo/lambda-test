

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some throws ReferenceError if callbackfn is
    unreferenced
---*/

var arr = new Array(10);
assert.throws(ReferenceError, function() {
  arr.some(foo);
});
