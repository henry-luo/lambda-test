

/*---
es5id: 15.2.3.5-4-294
description: >
    Object.create - 'set' property of one property in 'Properties' is
    a primitive boolean value true (8.10.5 step 8.b)
---*/


assert.throws(TypeError, function() {
  Object.create({}, {
    prop: {
      set: true
    }
  });
});
