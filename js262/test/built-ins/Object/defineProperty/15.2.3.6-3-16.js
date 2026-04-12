

/*---
es5id: 15.2.3.6-3-16
description: Object.defineProperty - 'Attributes' is null (8.10.5 step 1)
---*/

assert.throws(TypeError, function() {
  Object.defineProperty({}, "property", null);
});
