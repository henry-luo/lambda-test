

/*---
es5id: 15.2.3.3-4-225
description: >
    Object.getOwnPropertyDescriptor - ensure that 'value' property of
    returned object is data property with correct 'enumerable'
    attribute
---*/

var obj = {
  "property": "ownDataProperty"
};

var desc = Object.getOwnPropertyDescriptor(obj, "property");
var accessed = false;

for (var prop in desc) {
  if (prop === "value") {
    accessed = true;
  }
}

assert(accessed, 'accessed !== true');
