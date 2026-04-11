

/*---
esid: sec-array.prototype.reduceright
description: Array.prototype.reduceRight applied to undefined throws a TypeError
---*/


assert.throws(TypeError, function() {
  Array.prototype.reduceRight.call(undefined);
});
