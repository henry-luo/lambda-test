

/*---
es5id: 15.2.3.3-4-232
description: >
    Object.getOwnPropertyDescriptor - ensure that 'enumerable'
    property of returned object is data property with correct
    'writable' attribute
---*/

var obj = {
  "property": "ownDataProperty"
};

var desc = Object.getOwnPropertyDescriptor(obj, "property");

desc.enumerable = "overwriteDataProperty";

assert.sameValue(desc.enumerable, "overwriteDataProperty", 'desc.enumerable');
