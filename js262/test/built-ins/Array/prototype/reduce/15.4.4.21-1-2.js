

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce applied to null
---*/


assert.throws(TypeError, function() {
  Array.prototype.reduce.call(null);
});
