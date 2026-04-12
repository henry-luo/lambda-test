

/*---
es6id: 26.1.14
description: >
  Reflect.setPrototypeOf is configurable, writable and not enumerable.
info: |
  26.1.14 Reflect.setPrototypeOf ( target, proto )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [Reflect]
---*/

verifyProperty(Reflect, 'setPrototypeOf', {
  writable: true,
  enumerable: false,
  configurable: true
});
