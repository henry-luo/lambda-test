

/*---
description: >
    Functions declared as methods have a `length` property that describes the
    number of formal parameters.
es6id: 14.3.8
includes: [propertyHelper.js]
---*/

var method = { method(a, b, c) {} }.method;

verifyProperty(method, "length", {
  value: 3,
  writable: false,
  enumerable: false,
  configurable: true,
});
