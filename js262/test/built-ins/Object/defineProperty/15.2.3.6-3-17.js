

/*---
es5id: 15.2.3.6-3-17
description: >
    Object.defineProperty - 'Attributes' is a boolean primitive
    (8.10.5 step 1)
---*/

assert.throws(TypeError, function() {
  Object.defineProperty({}, "property", true);
});
