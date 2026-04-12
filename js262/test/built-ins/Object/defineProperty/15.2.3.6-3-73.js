

/*---
es5id: 15.2.3.6-3-73
description: >
    Object.defineProperty - 'configurable' property in 'Attributes' is
    present (8.10.5 step 4)
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "property", {
  configurable: false
});

verifyProperty(obj, "property", {
  configurable: false,
});
