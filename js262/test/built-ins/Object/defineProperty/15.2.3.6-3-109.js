

/*---
es5id: 15.2.3.6-3-109
description: >
    Object.defineProperty - 'configurable' property in 'Attributes' is
    an empty string (8.10.5 step 4.b)
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "property", {
  configurable: ""
});

verifyProperty(obj, "property", {
  configurable: false,
});
