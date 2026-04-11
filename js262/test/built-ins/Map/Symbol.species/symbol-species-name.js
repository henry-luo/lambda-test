

/*---
es6id: 23.1.2.2
description: >
  Map[Symbol.species] accessor property get name
info: |
  23.1.2.2 get Map [ @@species ]

  ...
  The value of the name property of this function is "get [Symbol.species]".
features: [Symbol.species]
---*/

var descriptor = Object.getOwnPropertyDescriptor(Map, Symbol.species);

assert.sameValue(
  descriptor.get.name,
  'get [Symbol.species]'
);
