

/*---
es5id: 15.2.3.6-3-222
description: >
    Object.defineProperty - 'Attributes' is a Number object that uses
    Object's [[Get]] method to access the 'get' property (8.10.5 step
    7.a)
---*/

var obj = {};

var numObj = new Number(-2);

numObj.get = function() {
  return "numberGetProperty";
};

Object.defineProperty(obj, "property", numObj);

assert.sameValue(obj.property, "numberGetProperty", 'obj.property');
