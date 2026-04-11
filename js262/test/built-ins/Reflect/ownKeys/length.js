

/*---
es6id: 26.1.11
description: >
  Reflect.ownKeys.length value and property descriptor
includes: [propertyHelper.js]
features: [Reflect]
---*/

verifyProperty(Reflect.ownKeys, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
