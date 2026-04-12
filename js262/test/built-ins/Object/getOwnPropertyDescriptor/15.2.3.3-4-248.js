

/*---
es5id: 15.2.3.3-4-248
description: >
    Object.getOwnPropertyDescriptor - returned object contains the
    property 'value' if the value of property 'value' is not
    explicitly specified when defined by Object.defineProperty
---*/

var obj = {};
Object.defineProperty(obj, "property", {
  writable: true,
  configurable: true
});

var desc = Object.getOwnPropertyDescriptor(obj, "property");

assert("value" in desc, '"value" in desc !== true');
