

/*---
es5id: 15.2.3.5-4-3
description: >
    Object.create throws TypeError if 'Properties' is null (15.2.3.7
    step 2)
---*/


assert.throws(TypeError, function() {
  Object.create({}, null);
});
