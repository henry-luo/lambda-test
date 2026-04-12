

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce applied to undefined
---*/


assert.throws(TypeError, function() {
  Array.prototype.reduce.call(undefined);
});
