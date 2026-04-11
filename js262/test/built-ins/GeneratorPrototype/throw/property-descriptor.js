

/*---
description: >
    The GeneratorPrototype intrinsic should define a `throw` property that is
    non-enumerable, writable, and configurable (as per section 17).
includes: [propertyHelper.js]
es6id: 25.3.1
features: [generators]
---*/

function* g() {}
var GeneratorPrototype = Object.getPrototypeOf(g).prototype;

verifyProperty(GeneratorPrototype, 'throw', {
  writable: true,
  enumerable: false,
  configurable: true
});
