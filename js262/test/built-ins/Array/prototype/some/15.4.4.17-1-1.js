

/*---
esid: sec-array.prototype.some
description: Array.prototype.some applied to undefined throws a TypeError
---*/


assert.throws(TypeError, function() {
  Array.prototype.some.call(undefined);
});
