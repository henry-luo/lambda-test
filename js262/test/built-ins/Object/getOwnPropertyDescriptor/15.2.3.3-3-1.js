

/*---
es5id: 15.2.3.3-3-1
description: Object.getOwnPropertyDescriptor - 'P' is own data property
---*/

var obj = {
  property: "ownDataProperty"
};

var desc = Object.getOwnPropertyDescriptor(obj, "property");

assert.sameValue(desc.value, "ownDataProperty", 'desc.value');
