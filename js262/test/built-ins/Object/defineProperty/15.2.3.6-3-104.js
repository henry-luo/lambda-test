

/*---
es5id: 15.2.3.6-3-104
description: >
    Object.defineProperty - 'configurable' property in 'Attributes' is
    +0 (8.10.5 step 4.b)
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "property", {
  configurable: +0
});

verifyProperty(obj, "property", {
  configurable: false,
});
