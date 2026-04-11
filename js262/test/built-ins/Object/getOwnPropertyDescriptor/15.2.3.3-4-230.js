

/*---
es5id: 15.2.3.3-4-230
description: >
    Object.getOwnPropertyDescriptor - ensure that 'writable' property
    of returned object is data property with correct 'configurable'
    attribute
---*/

var obj = {
  "property": "ownDataProperty"
};

var desc = Object.getOwnPropertyDescriptor(obj, "property");

var propDefined = ("writable" in desc);

delete desc.writable;
var propDeleted = "writable" in desc;

assert(propDefined, 'propDefined !== true');
assert.sameValue(propDeleted, false, 'propDeleted');
