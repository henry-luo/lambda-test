

/*---
es5id: 15.5.4.20-1-1
description: String.prototype.trim throws TypeError when string is undefined
---*/


assert.throws(TypeError, function() {
  String.prototype.trim.call(undefined);
});
