

/*---
es6id: 26.1.13
description: >
  Reflect.set.length value and property descriptor
info: |
  26.1.13 Reflect.set ( target, propertyKey, V [ , receiver ] )

  The length property of the set function is 3.
includes: [propertyHelper.js]
features: [Reflect, Reflect.set]
---*/

verifyProperty(Reflect.set, "length", {
  value: 3,
  writable: false,
  enumerable: false,
  configurable: true
});
