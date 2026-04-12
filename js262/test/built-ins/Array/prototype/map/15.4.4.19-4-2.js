

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map throws ReferenceError if callbackfn is
    unreferenced
---*/

var arr = new Array(10);
assert.throws(ReferenceError, function() {
  arr.map(foo);
});
