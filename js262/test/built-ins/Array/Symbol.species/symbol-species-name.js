

/*---
es6id: 22.1.2.5
description: >
  Array[Symbol.species] accessor property get name
info: |
  22.1.2.5 get Array [ @@species ]

  ...
  The value of the name property of this function is "get [Symbol.species]".
features: [Symbol.species]
includes: [propertyHelper.js]
---*/

var descriptor = Object.getOwnPropertyDescriptor(Array, Symbol.species);

verifyProperty(descriptor.get, "name", {
  value: "get [Symbol.species]",
  writable: false,
  enumerable: false,
  configurable: true
});
