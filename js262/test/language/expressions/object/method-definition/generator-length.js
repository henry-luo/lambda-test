

/*---
description: >
    Generator functions declared as methods have a `length` property that
    describes the number of formal parameters.
es6id: 14.4.13
includes: [propertyHelper.js]
features: [generators]
---*/

var method = { *method(a, b, c) {} }.method;

verifyProperty(method, "length", {
  value: 3,
  writable: false,
  enumerable: false,
  configurable: true,
});
