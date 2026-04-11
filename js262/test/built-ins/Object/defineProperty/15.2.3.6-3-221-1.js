

/*---
es5id: 15.2.3.6-3-221-1
description: >
    Object.defineProperty - 'Attributes' is a Boolean object that uses
    Object's [[Get]] method to access the 'get' property of prototype
    object (8.10.5 step 7.a)
---*/

var obj = {};

Boolean.prototype.get = function() {
  return "booleanGetProperty";
};
var boolObj = new Boolean(true);

Object.defineProperty(obj, "property", boolObj);

assert.sameValue(obj.property, "booleanGetProperty", 'obj.property');
