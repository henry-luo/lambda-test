

/*---
esid: sec-array.prototype.map
description: Array.prototype.map - applied to undefined
---*/


assert.throws(TypeError, function() {
  Array.prototype.map.call(undefined); 
});
