

/*---
es5id: 15.2.3.5-4-16
description: >
    Object.create - own enumerable data property in 'Properties' is
    defined in 'obj' (15.2.3.7 step 3)
---*/

var newObj = Object.create({}, {
  prop: {}
});

assert(newObj.hasOwnProperty("prop"), 'newObj.hasOwnProperty("prop") !== true');
