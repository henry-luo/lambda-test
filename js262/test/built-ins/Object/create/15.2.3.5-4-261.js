

/*---
es5id: 15.2.3.5-4-261
description: >
    Object.create - 'get' property of one property in 'Properties' is
    a primitive string (8.10.5 step 7.b)
---*/


assert.throws(TypeError, function() {
  Object.create({}, {
    prop: {
      get: "string"
    }
  });
});
