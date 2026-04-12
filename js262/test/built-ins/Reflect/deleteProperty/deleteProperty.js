

/*---
es6id: 26.1.4
description: >
  Reflect.deleteProperty is configurable, writable and not enumerable.
info: |
  26.1.4 Reflect.deleteProperty ( target, propertyKey )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [Reflect]
---*/

verifyProperty(Reflect, 'deleteProperty', {
  writable: true,
  enumerable: false,
  configurable: true
});
