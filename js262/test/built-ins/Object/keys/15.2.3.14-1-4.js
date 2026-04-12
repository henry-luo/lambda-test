

/*---
es5id: 15.2.3.14-1-4
description: >
    Object.keys throws TypeError if type of first param is not Object
    (null)
---*/


assert.throws(TypeError, function() {
  Object.keys(null);
});
