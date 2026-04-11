

/*---
es6id: 26.1.3
description: >
  Reflect.defineProperty.length value and property descriptor
includes: [propertyHelper.js]
features: [Reflect]
---*/

verifyProperty(Reflect.defineProperty, "length", {
  value: 3,
  writable: false,
  enumerable: false,
  configurable: true
});
