

/*---
description: >
    The GeneratorPrototype intrinsic should define a `constructor` property
    that is non-enumerable, non-writable, and configurable.
includes: [propertyHelper.js]
es6id: 25.3.1
features: [generators]
---*/

function* g() {}
var Generator = Object.getPrototypeOf(g);
var GeneratorPrototype = Generator.prototype;

assert.sameValue(GeneratorPrototype.constructor, Generator);

verifyProperty(GeneratorPrototype, 'constructor', {
  writable: false,
  enumerable: false,
  configurable: true,
});
