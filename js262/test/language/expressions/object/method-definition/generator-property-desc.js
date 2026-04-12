

/*---
description: >
    Generator functions declared as methods are defined as enumerable,
    writable, configurable properties on the initialized object.
es6id: 14.4.13
includes: [propertyHelper.js]
features: [generators]
---*/

var obj = { *method() {} };

verifyProperty(obj, "method", {
  writable: true,
  enumerable: true,
  configurable: true,
});
