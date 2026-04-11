

/*---
es5id: 15.2.3.6-3-87
description: >
    Object.defineProperty - 'Attributes' is an Array object that uses
    Object's [[Get]] method to access the 'configurable' property
    (8.10.5 step 4.a)
---*/

var obj = {};

var arrObj = [1, 2, 3];

arrObj.configurable = true;

Object.defineProperty(obj, "property", arrObj);

var beforeDeleted = obj.hasOwnProperty("property");

delete obj.property;

var afterDeleted = obj.hasOwnProperty("property");

assert.sameValue(beforeDeleted, true, 'beforeDeleted');
assert.sameValue(afterDeleted, false, 'afterDeleted');
