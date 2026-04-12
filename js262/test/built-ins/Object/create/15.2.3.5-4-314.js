

/*---
es5id: 15.2.3.5-4-314
description: >
    Object.create - some enumerable own property in 'Properties' is
    empty object (15.2.3.7 step 7)
---*/

var newObj = Object.create({}, {
  foo: {}
});

assert(newObj.hasOwnProperty("foo"), 'newObj.hasOwnProperty("foo") !== true');
