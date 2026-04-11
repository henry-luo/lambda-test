

/*---
esid: sec-array.prototype.some
description: Array.prototype.some applied to null throws a TypeError
---*/


assert.throws(TypeError, function() {
  Array.prototype.some.call(null);
});
