

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter throws ReferenceError if callbackfn is
    unreferenced
---*/

var arr = new Array(10);
assert.throws(ReferenceError, function() {
  arr.filter(foo);
});
