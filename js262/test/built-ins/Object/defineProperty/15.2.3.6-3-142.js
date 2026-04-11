

/*---
es5id: 15.2.3.6-3-142
description: >
    Object.defineProperty - 'Attributes' is a Boolean object that uses
    Object's [[Get]] method to access the 'value' property  (8.10.5
    step 5.a)
---*/

var obj = {};

var boolObj = new Boolean(true);

boolObj.value = "Boolean";

Object.defineProperty(obj, "property", boolObj);

assert.sameValue(obj.property, "Boolean", 'obj.property');
