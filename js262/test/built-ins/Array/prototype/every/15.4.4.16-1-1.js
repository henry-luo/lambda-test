

/*---
esid: sec-array.prototype.every
description: Array.prototype.every applied to undefined throws a TypeError
---*/


assert.throws(TypeError, function() {
  Array.prototype.every.call(undefined); 
});
