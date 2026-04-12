

/*---
es5id: 15.2.3.7-1-2
description: Object.defineProperties throws TypeError if 'O' is null
---*/

assert.throws(TypeError, function() {
  Object.defineProperties(null, {});
});
