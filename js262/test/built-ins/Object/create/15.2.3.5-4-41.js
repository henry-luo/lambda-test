

/*---
es5id: 15.2.3.5-4-41
description: >
    Object.create - value of one property in 'Properties' is undefined
    (8.10.5 step 1)
---*/


assert.throws(TypeError, function() {
  Object.create({}, {
    prop: undefined
  });
});
