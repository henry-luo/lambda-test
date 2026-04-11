

/*---
es5id: 15.2.3.7-1-3
description: Object.defineProperties throws TypeError if 'O' is a boolean
---*/

assert.throws(TypeError, function() {
  Object.defineProperties(true, {});
});
