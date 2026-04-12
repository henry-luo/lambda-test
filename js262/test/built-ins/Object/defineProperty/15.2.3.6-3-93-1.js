

/*---
es5id: 15.2.3.6-3-93-1
description: >
    Object.defineProperty - 'Attributes' is an RegExp object that uses
    Object's [[Get]] method to access the 'configurable' property
    (8.10.5 step 4.a)
---*/

var obj = {};

RegExp.prototype.configurable = true;
var regObj = new RegExp();

Object.defineProperty(obj, "property", regObj);

var beforeDeleted = obj.hasOwnProperty("property");

delete obj.property;

var afterDeleted = obj.hasOwnProperty("property");

assert.sameValue(beforeDeleted, true, 'beforeDeleted');
assert.sameValue(afterDeleted, false, 'afterDeleted');
