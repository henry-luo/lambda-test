

/*---
es5id: 15.2.3.6-3-223-1
description: >
    Object.defineProperty - 'Attributes' is the Math object that uses
    Object's [[Get]] method to access the 'get' property of prototype
    object (8.10.5 step 7.a)
---*/

var obj = {};

Object.prototype.get = function() {
  return "mathGetProperty";
};

Object.defineProperty(obj, "property", Math);

assert.sameValue(obj.property, "mathGetProperty", 'obj.property');
