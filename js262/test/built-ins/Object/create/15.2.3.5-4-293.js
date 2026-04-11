

/*---
es5id: 15.2.3.5-4-293
description: >
    Object.create - 'set' property of one property in 'Properties' is
    a primitive value null (8.10.5 step 8.b)
---*/


assert.throws(TypeError, function() {
  Object.create({}, {
    prop: {
      set: null
    }
  });
});
