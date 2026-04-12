

/*---
esid: sec-array.prototype.lastindexof
description: Array.prototype.lastIndexOf applied to undefined throws a TypeError
---*/


assert.throws(TypeError, function() {
  Array.prototype.lastIndexOf.call(undefined);
});
