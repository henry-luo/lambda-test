

/*---
es5id: 15.2.3.6-3-144-1
description: >
    Object.defineProperty - 'Attributes' is the Math object that uses
    Object's [[Get]] method to access the 'value' property of
    prototype object  (8.10.5 step 5.a)
---*/

var obj = {};

Object.prototype.value = "Math";

Object.defineProperty(obj, "property", Math);

assert.sameValue(obj.property, "Math", 'obj.property');
