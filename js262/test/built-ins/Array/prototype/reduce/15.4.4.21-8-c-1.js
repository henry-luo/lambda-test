

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce throws TypeError when Array is empty and
    initialValue is not present
---*/

function callbackfn(prevVal, curVal, idx, obj)
{}

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.reduce(callbackfn);
});
