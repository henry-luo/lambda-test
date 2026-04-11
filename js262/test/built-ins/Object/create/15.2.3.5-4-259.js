

/*---
es5id: 15.2.3.5-4-259
description: >
    Object.create - 'get' property of one property in 'Properties' is
    a boolean primitive (8.10.5 step 7.b)
---*/


assert.throws(TypeError, function() {
  Object.create({}, {
    prop: {
      get: false
    }
  });
});
