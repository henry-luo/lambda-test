

/*---
es6id: 26.1.1
description: >
  Reflect.apply.length value and property descriptor
includes: [propertyHelper.js]
features: [Reflect]
---*/

verifyProperty(Reflect.apply, "length", {
  value: 3,
  writable: false,
  enumerable: false,
  configurable: true
});
