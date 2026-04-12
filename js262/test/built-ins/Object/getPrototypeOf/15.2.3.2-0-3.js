

/*---
es5id: 15.2.3.2-0-3
description: Object.getPrototypeOf must take 1 parameter
---*/


assert.throws(TypeError, function() {
  Object.getPrototypeOf();
});
