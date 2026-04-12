

/*---
es6id: 26.1.2
description: >
  Reflect.construct.length value and property descriptor
info: |
  26.1.2 Reflect.construct ( target, argumentsList [, newTarget] )

  The length property of the construct function is 2.
includes: [propertyHelper.js]
features: [Reflect, Reflect.construct]
---*/

verifyProperty(Reflect.construct, "length", {
  value: 2,
  writable: false,
  enumerable: false,
  configurable: true
});
