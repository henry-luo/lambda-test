

/*---
es6id: 26.1.14
description: >
  Reflect.setPrototypeOf.name value and property descriptor
info: |
  26.1.14 Reflect.setPrototypeOf ( target, proto )

  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [Reflect, Reflect.setPrototypeOf]
---*/

verifyProperty(Reflect.setPrototypeOf, "name", {
  value: "setPrototypeOf",
  writable: false,
  enumerable: false,
  configurable: true
});
