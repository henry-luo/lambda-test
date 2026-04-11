

/*---
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    "Generator".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
es6id: 25.3.1.5
includes: [propertyHelper.js]
features: [generators, Symbol.toStringTag]
---*/

var GeneratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf(function*() {}())
);

assert.sameValue(GeneratorPrototype[Symbol.toStringTag], 'Generator');

verifyProperty(GeneratorPrototype, Symbol.toStringTag, {
  writable: false,
  enumerable: false,
  configurable: true,
});
