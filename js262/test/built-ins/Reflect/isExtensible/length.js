

/*---
es6id: 26.1.10
description: >
  Reflect.isExtensible.length value and property descriptor
includes: [propertyHelper.js]
features: [Reflect]
---*/

verifyProperty(Reflect.isExtensible, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
