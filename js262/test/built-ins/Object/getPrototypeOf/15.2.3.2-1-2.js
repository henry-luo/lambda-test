

/*---
es5id: 15.2.3.2-1-2
description: Object.getPrototypeOf throws TypeError if 'O' is null
---*/


assert.throws(TypeError, function() {
  Object.getPrototypeOf(null);
});
