

/*---
es5id: 15.2.3.5-4-232
description: >
    Object.create - 'get'  property of one property in 'Properties' is
    not present (8.10.5 step 7)
---*/

var newObj = Object.create({}, {
  prop: {}
});

assert.sameValue(typeof(newObj.prop), "undefined", 'typeof (newObj.prop)');
