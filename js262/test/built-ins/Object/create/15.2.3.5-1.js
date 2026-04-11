

/*---
es5id: 15.2.3.5-1
description: Object.create throws TypeError if type of first param is not Object
---*/


assert.throws(TypeError, function() {
  Object.create(0);
});
