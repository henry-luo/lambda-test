

/*---
esid: sec-array.prototype.every
description: Array.prototype.every applied to null throws a TypeError
---*/


assert.throws(TypeError, function() {
  Array.prototype.every.call(null); 
});
