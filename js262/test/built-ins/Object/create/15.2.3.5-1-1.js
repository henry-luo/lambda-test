

/*---
es5id: 15.2.3.5-1-1
description: Object.create throws TypeError if 'O' is undefined
---*/


assert.throws(TypeError, function() {
  Object.create(undefined);
});
