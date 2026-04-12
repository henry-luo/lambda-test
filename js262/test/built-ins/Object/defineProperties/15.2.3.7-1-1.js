

/*---
es5id: 15.2.3.7-1-1
description: Object.defineProperties throws TypeError if 'O' is undefined
---*/

assert.throws(TypeError, function() {
  Object.defineProperties(undefined, {});
});
