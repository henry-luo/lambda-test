

/*---
es6id: 26.1.12
description: >
  Reflect.preventExtensions is configurable, writable and not enumerable.
info: |
  26.1.12 Reflect.preventExtensions ( target )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [Reflect]
---*/

verifyProperty(Reflect, 'preventExtensions', {
  writable: true,
  enumerable: false,
  configurable: true
});
