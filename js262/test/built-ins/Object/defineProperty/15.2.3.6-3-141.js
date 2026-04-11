

/*---
es5id: 15.2.3.6-3-141
description: >
    Object.defineProperty - 'Attributes' is a String object that uses
    Object's [[Get]] method to access the 'value' property  (8.10.5
    step 5.a)
---*/

var obj = {};

var strObj = new String("abc");

strObj.value = "String";

Object.defineProperty(obj, "property", strObj);

assert.sameValue(obj.property, "String", 'obj.property');
