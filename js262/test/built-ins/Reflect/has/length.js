

/*---
es6id: 26.1.9
description: >
  Reflect.has.length value and property descriptor
includes: [propertyHelper.js]
features: [Reflect]
---*/

verifyProperty(Reflect.has, "length", {
  value: 2,
  writable: false,
  enumerable: false,
  configurable: true
});
