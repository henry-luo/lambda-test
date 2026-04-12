

/*---
es6id: 26.1.9
description: >
  Reflect.has is configurable, writable and not enumerable.
info: |
  26.1.9 Reflect.has ( target, propertyKey )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [Reflect]
---*/

verifyProperty(Reflect, 'has', {
  writable: true,
  enumerable: false,
  configurable: true
});
