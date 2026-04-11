

/*---
es5id: 15.2.3.3-1-1
description: >
    Object.getOwnPropertyDescriptor - TypeError is thrown when first
    param is undefined
---*/


assert.throws(TypeError, function() {
  Object.getOwnPropertyDescriptor(undefined, "foo");
});
