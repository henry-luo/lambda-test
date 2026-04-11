

/*---
es5id: 15.2.3.6-3-207
description: >
    Object.defineProperty - 'get' property in 'Attributes' is own data
    property (8.10.5 step 7.a)
---*/

var obj = {};
var attributes = {
  get: function() {
    return "ownDataProperty";
  }
};

Object.defineProperty(obj, "property", attributes);

assert.sameValue(obj.property, "ownDataProperty", 'obj.property');
