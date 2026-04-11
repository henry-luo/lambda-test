

/*---
esid: sec-array.prototype.map
description: Array.prototype.map - applied to null
---*/


assert.throws(TypeError, function() {
  Array.prototype.map.call(null); 
});
