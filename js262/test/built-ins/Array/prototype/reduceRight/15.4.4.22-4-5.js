

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight throws TypeError if callbackfn is
    number
---*/

var arr = new Array(10);
assert.throws(TypeError, function() {
  arr.reduceRight(5);
});
