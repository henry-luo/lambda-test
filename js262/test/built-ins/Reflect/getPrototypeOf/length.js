

/*---
es6id: 26.1.8
description: >
  Reflect.getPrototypeOf.length value and property descriptor
includes: [propertyHelper.js]
features: [Reflect]
---*/

verifyProperty(Reflect.getPrototypeOf, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
