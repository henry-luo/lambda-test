

/*---
esid: sec-array.prototype.reduceright
description: Array.prototype.reduceRight applied to null throws a TypeError
---*/


assert.throws(TypeError, function() {
  Array.prototype.reduceRight.call(null);
});
