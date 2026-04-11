

/*---
es5id: 15.2.3.7-2-2
description: >
    Object.defineProperties throws TypeError if 'Properties' is
    undefined
---*/

assert.throws(TypeError, function() {
  Object.defineProperties({}, undefined);
});
