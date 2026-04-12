

/*---
description: >
    Generator functions declared as methods define a `prototype` property.
es6id: 14.4.13
includes: [propertyHelper.js]
features: [generators]
---*/

var GeneratorPrototype = Object.getPrototypeOf(function* () {}).prototype;
var method = { *method() {} }.method;

assert.sameValue(
  Object.getPrototypeOf(method.prototype),
  GeneratorPrototype
);

verifyProperty(method, "prototype", {
  writable: true,
  enumerable: false,
  configurable: false,
});
