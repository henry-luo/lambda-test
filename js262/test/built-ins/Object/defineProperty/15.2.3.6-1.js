

/*---
es5id: 15.2.3.6-1
description: >
    Object.defineProperty throws TypeError if type of first param is
    not Object
---*/

assert.throws(TypeError, function() {
  Object.defineProperty(true, "foo", {});
});
