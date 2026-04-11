

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight throws TypeError if 'length' is 0
    (empty array), no initVal
---*/

function cb() {}
assert.throws(TypeError, function() {
  [].reduceRight(cb);
});
