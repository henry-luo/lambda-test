

/*---
es5id: 15.2.3.5-4-231
description: >
    Object.create - 'get'  property of one property in 'Properties' is
    present (8.10.5 step 7)
---*/

var newObj = Object.create({}, {
  prop: {
    get: function() {
      return "present";
    }
  }
});

assert.sameValue(newObj.prop, "present", 'newObj.prop');
