

/*---
es5id: 15.2.3.7-1-4
description: Object.defineProperties throws TypeError if 'O' is a string
---*/

assert.throws(TypeError, function() {
  Object.defineProperties("abc", {});
});
