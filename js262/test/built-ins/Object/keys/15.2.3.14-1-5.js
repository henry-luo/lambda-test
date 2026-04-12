

/*---
es5id: 15.2.3.14-1-5
description: >
    Object.keys throws TypeError if type of first param is not Object
    (undefined)
---*/


assert.throws(TypeError, function() {
  Object.keys(undefined);
});
