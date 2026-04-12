

/*---
es6id: 26.1.6
description: >
  Reflect.get is configurable, writable and not enumerable.
info: |
  26.1.6 Reflect.get ( target, propertyKey [ , receiver ])

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [Reflect]
---*/

verifyProperty(Reflect, 'get', {
  writable: true,
  enumerable: false,
  configurable: true
});
