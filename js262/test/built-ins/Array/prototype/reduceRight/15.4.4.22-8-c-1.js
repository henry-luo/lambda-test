

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight throws TypeError when Array is empty
    and initialValue is not present
---*/

function callbackfn(prevVal, curVal, idx, obj)
{}

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.reduceRight(callbackfn);
});
