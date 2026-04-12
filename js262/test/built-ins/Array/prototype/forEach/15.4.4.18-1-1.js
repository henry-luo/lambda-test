

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach applied to undefined
---*/


assert.throws(TypeError, function() {
  Array.prototype.forEach.call(undefined); 
});
