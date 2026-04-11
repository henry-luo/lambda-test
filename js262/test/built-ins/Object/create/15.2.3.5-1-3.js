

/*---
es5id: 15.2.3.5-1-3
description: Object.create throws TypeError if 'O' is a boolean primitive
---*/


assert.throws(TypeError, function() {
  Object.create(true);
});
