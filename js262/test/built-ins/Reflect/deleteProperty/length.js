

/*---
es6id: 26.1.4
description: >
  Reflect.deleteProperty.length value and property descriptor
includes: [propertyHelper.js]
features: [Reflect]
---*/

verifyProperty(Reflect.deleteProperty, "length", {
  value: 2,
  writable: false,
  enumerable: false,
  configurable: true
});
