

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach applied to null
---*/


assert.throws(TypeError, function() {
  Array.prototype.forEach.call(null); 
});
