

/*---
es5id: 15.2.3.6-3-249-1
description: >
    Object.defineProperty - 'Attributes' is an Array object that uses
    Object's [[Get]] method to access the 'set' property of prototype
    object (8.10.5 step 8.a)
---*/

var obj = {};
var data = "data";

Array.prototype.set = function(value) {
  data = value;
};
var arrObj = [];

Object.defineProperty(obj, "property", arrObj);
obj.property = "overrideData";

assert(obj.hasOwnProperty("property"), 'obj.hasOwnProperty("property") !== true');
assert.sameValue(data, "overrideData", 'data');
