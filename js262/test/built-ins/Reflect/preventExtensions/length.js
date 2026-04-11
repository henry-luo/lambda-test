

/*---
es6id: 26.1.12
description: >
  Reflect.preventExtensions.length value and property descriptor
includes: [propertyHelper.js]
features: [Reflect]
---*/

verifyProperty(Reflect.preventExtensions, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
