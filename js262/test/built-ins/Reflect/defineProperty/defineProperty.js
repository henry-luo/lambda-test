

/*---
es6id: 26.1.3
description: >
  Reflect.defineProperty is configurable, writable and not enumerable.
info: |
  26.1.3 Reflect.defineProperty ( target, propertyKey, attributes )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [Reflect]
---*/

verifyProperty(Reflect, 'defineProperty', {
  writable: true,
  enumerable: false,
  configurable: true
});
