

/*---
es6id: 26.1.7
description: >
  Reflect.getOwnPropertyDescriptor is configurable, writable and not enumerable.
info: |
  26.1.7 Reflect.getOwnPropertyDescriptor ( target, propertyKey )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [Reflect]
---*/

verifyProperty(Reflect, 'getOwnPropertyDescriptor', {
  writable: true,
  enumerable: false,
  configurable: true
});
