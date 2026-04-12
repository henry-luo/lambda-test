

/*---
es5id: 15.2.3.6-3-127
description: >
    Object.defineProperty - 'value' property in 'Attributes' is not
    present  (8.10.5 step 5)
---*/

var obj = {};

var attr = {
  writable: true
};

Object.defineProperty(obj, "property", attr);

assert(obj.hasOwnProperty("property"), 'obj.hasOwnProperty("property") !== true');
assert.sameValue(typeof(obj.property), "undefined", 'typeof (obj.property)');
