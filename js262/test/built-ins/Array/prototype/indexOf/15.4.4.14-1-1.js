

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf applied to undefined throws a TypeError
---*/


assert.throws(TypeError, function() {
  Array.prototype.indexOf.call(undefined);
});
