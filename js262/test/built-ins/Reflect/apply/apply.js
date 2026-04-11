

/*---
es6id: 26.1.1
description: >
  Reflect.apply is configurable, writable and not enumerable.
info: |
  26.1.1 Reflect.apply ( target, thisArgument, argumentsList )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [Reflect]
---*/

verifyProperty(Reflect, 'apply', {
  writable: true,
  enumerable: false,
  configurable: true
});
