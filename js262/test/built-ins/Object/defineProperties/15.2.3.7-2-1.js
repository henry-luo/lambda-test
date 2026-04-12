

/*---
es5id: 15.2.3.7-2-1
description: Object.defineProperties throws TypeError if 'Properties' is null
---*/

assert.throws(TypeError, function() {
  Object.defineProperties({}, null);
});
