

/*---
es5id: 15.5.4.20-1-2
description: String.prototype.trim throws TypeError when string is null
---*/


assert.throws(TypeError, function() {
  String.prototype.trim.call(null);
});
