

/*---
es5id: 15.2.3.6-3-206
description: >
    Object.defineProperty - 'get' property in 'Attributes' is not
    present (8.10.5 step 7)
---*/

var obj = {};

Object.defineProperty(obj, "property", {
  set: function() {}
});

assert.sameValue(typeof obj.property, "undefined", 'typeof obj.property');
assert(obj.hasOwnProperty("property"), 'obj.hasOwnProperty("property") !== true');
