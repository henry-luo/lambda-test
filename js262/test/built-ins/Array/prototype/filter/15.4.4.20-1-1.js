

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter applied to undefined throws a TypeError
---*/


assert.throws(TypeError, function() {
  Array.prototype.filter.call(undefined); 
});
