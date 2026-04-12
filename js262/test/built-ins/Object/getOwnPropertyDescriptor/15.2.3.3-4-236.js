

/*---
es5id: 15.2.3.3-4-236
description: >
    Object.getOwnPropertyDescriptor - ensure that 'configurable'
    property of returned object is data property with correct
    'writable' attribute
---*/

var obj = {
  "property": "ownDataProperty"
};

var desc = Object.getOwnPropertyDescriptor(obj, "property");

desc.writable = "overwriteDataProperty";

assert.sameValue(desc.writable, "overwriteDataProperty", 'desc.writable');
