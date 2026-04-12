

/*---
es5id: 15.2.3.4-1-2
description: Object.getOwnPropertyNames throws TypeError if 'O' is undefined
---*/


assert.throws(TypeError, function() {
  Object.getOwnPropertyNames(undefined);
});
