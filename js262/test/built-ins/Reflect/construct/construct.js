

/*---
es6id: 26.1.2
description: >
  Reflect.construct is configurable, writable and not enumerable.
info: |
  26.1.2 Reflect.construct ( target, argumentsList [, newTarget] )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [Reflect]
---*/

verifyProperty(Reflect, 'construct', {
  writable: true,
  enumerable: false,
  configurable: true
});
