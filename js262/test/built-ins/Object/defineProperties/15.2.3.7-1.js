

/*---
es5id: 15.2.3.7-1
description: >
    Object.defineProperties throws TypeError if type of first param is
    not Object
---*/

assert.throws(TypeError, function() {
  Object.defineProperties(0, {});
});
