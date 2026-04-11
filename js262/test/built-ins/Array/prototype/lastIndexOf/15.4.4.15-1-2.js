

/*---
esid: sec-array.prototype.lastindexof
description: Array.prototype.lastIndexOf applied to null throws a TypeError
---*/


assert.throws(TypeError, function() {
  Array.prototype.lastIndexOf.call(null);
});
