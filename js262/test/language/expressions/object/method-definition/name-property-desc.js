

/*---
description: >
    Functions declared as methods are defined as enumerable, writable,
    configurable properties on the initialized object.
es6id: 14.3.8
includes: [propertyHelper.js]
---*/

var obj = { method() {} };

verifyProperty(obj, "method", {
  writable: true,
  enumerable: true,
  configurable: true,
});
